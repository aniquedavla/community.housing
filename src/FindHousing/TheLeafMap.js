import React from 'react';
import { render } from 'react-dom';
import L from 'leaflet';
import Fire from '../FireDbConfig/Fire';
import Geocode from "react-geocode";



class TheLeafMap extends React.Component {

  theMap;

  constructor(props) {
    super(props)

    this.state = {
      roomsList: [],
      cities: []
    }

  }

  componentDidMount() {
    this.drawMap();
    this.getNumsOfListing();
    //this.map();
  }

  getNumsOfListing() {
    var database = Fire.database();

    let rooms = [];

    var ref = database.ref('housePosts');
    // console.log(snapshot.child('firstName').val());
    // console.log(snapshot.child('lastName').val());
    // console.log(snapshot.child('email').val());
    // posterName = snapshot.child('firstName').val() + " " + snapshot.child('lastName').val();
    // email = snapshot.child('email').val();
    ref.on('value', (snapshot) => {
      let posts = snapshot.val();
      for (let post in posts) {

        rooms.push({
          poster: posts[post].posterName,
          description: posts[post].description,
          imagesList: posts[post].imagesUrls,
          postCity: posts[post].city,
          rentCost: posts[post].reantCost,
          baths: posts[post].numberOfBaths,
          rooms: posts[post].numberOfRooms
        });

      }

      rooms.reverse();

      this.setState({
        roomsList: rooms
      })

      this.filterCities();


    });


  }

  filterCities() {
    let list = [];
    var citiesAndCount = [];
    let counter = 0;
    list = this.state.roomsList;
    for (let post in list) {
      let city = list[post].postCity;
      for (let p in list) {
        if (list[p].postCity === city) {
          counter++;
        }
      }
      citiesAndCount[city] = {x: 0, count: counter, y:0 };
      counter = 0;
    }

    citiesAndCount = this.requestCityData(citiesAndCount);


    //console.log(citiesAndCount);
    // console.log(citiesAndCount["San Jose"]);
    // console.log(citiesAndCount["San Jose"].count);
    // console.log(citiesAndCount["San Jose"].y);



    // for (var x in citiesAndCount) {
    //   console.log(x);
    //   console.log("Values: ");
    //   var value = citiesAndCount[x];
    //   for (var y in value) {
    //     console.log(y + + value[y]);
    //   }
    // }
    //console.log(citiesCordinates);

  }

  requestCityData = async(cityArray) => {
    
    let citiesAndCount = await cityArray;
    for (let c in citiesAndCount) {
      
      const response = await fetch("https://nominatim.openstreetmap.org/search/" + c + "?format=json&addressdetails=1&limit=1&polygon_svg=1");
      const cityData = await response.json();
      

      if(cityData && cityData.length > 0){

        let x = parseFloat(cityData[0].lat);
        let y = parseFloat(cityData[0].lon);
        citiesAndCount[c].x = x;
        citiesAndCount[c].y = y;
      }
        // .then(res => res.json())
        // .then(
        //   (result) => {
        //     if (result) {
        //       console.log(result[0].lat );
        //       console.log(result[0].lon );
        //       let x = parseFloat(result[0].lat);
        //       let y = parseFloat(result[0].lon);
        //       citiesAndCount[c] = {x: x, y: y};

        //     }
        //   },
        //   (error) => {
        //   }
        // );
    }

    this.map(citiesAndCount,this.theMap);

    return citiesAndCount;
}

drawMap(){
  this.theMap = L.map('map').setView([37.055480, -121.893028], 10);

    L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(this.theMap);
}

  map(citiesAndCount) {

    

    // var marker = L.marker([51.5, -0.09]).addTo(map);
    // marker.bindPopup("<b>Hello world!</b><br>I am a popup.").openPopup();

    // var circle = L.circle([37.3316, -121.8901], {
    //   color: 'red',
    //   fillColor: 'green',
    //   fillOpacity: 0.5,
    //   radius: 2700
    // }).addTo(map);

    // circle.bindPopup("<b>There are 7 listings in this area.</b><br>").openPopup();

    // var circle2 = L.circle([37.725685, -122.156830], {
    //   color: 'red',
    //   fillColor: 'green',
    //   fillOpacity: 0.5,
    //   radius: 2700
    // }).addTo(map);

    // circle2.bindPopup("<b>There are 2 listings in this area.</b><br>").openPopup();

    

    for (let c in citiesAndCount) {
      var circle = L.circle([citiesAndCount[c].x, citiesAndCount[c].y], {
        color: 'black',
        fillColor: 'red',
        fillOpacity: 0.5,
        radius: 2700
      }).addTo(this.theMap);

      circle.bindPopup("<b>There are " + citiesAndCount[c].count + " listings in this area.</b><br>").openPopup();
    }

    // map.on('geosearch_showlocation', function (result) {
    //   L.marker([result.x, result.y]).addTo(map)
    // });

    this.theMap.setView([37.055480, -121.893028], 10);






  }

  render() {
    return <div className="Map" id="map">xx</div>
  }
}

export default TheLeafMap;

