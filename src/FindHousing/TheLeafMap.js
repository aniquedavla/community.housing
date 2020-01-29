import React from 'react';
import {render} from 'react-dom';
import L from 'leaflet';

class TheLeafMap extends React.Component {
  componentDidMount() {
    this.map();
  }

  map() {
    var map = L.map('map').setView([37.3316, -121.8901], 10);

    L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);
  }

  render() {
    return <div className="Map" id="map">xx</div>
  }
}

export default TheLeafMap;

