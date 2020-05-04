import React from "react";
import ListHouse from "./ListHouse";
import HouseCard from "./HouseCard";
import Fire from "../FireDbConfig/Fire";
import { GridList, Button } from "@material-ui/core";
import {
  Card,
  CardImg,
  CardTitle,
  CardText,
  CardGroup,
  CardSubtitle,
  CardBody,
} from "reactstrap";
import FilterListTab from "./FilterListTab";

//React component on the right side of findhousing page
//useed to load posted rooms for a certain community
class RoomsList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      roomsList: [],
    };
  }

  componentDidMount() {
    var database = Fire.database();

    let rooms = [];

    var ref = database.ref("housePosts");
    // console.log(snapshot.child('firstName').val());
    // console.log(snapshot.child('lastName').val());
    // console.log(snapshot.child('email').val());
    // posterName = snapshot.child('firstName').val() + " " + snapshot.child('lastName').val();
    // email = snapshot.child('email').val();
    ref.on("value", (snapshot) => {
      let posts = snapshot.val();
      for (let post in posts) {
        // newState.push({
        //   id: item,
        //   title: items[item].title,
        //   user: items[item].user
        // });
        rooms.push({
          poster: posts[post].posterName,
          email: posts[post].email,
          description: posts[post].description,
          mainImage: posts[post].imagesUrls[0],
          postCity: posts[post].city,
          rentCost: posts[post].reantCost,
          baths: posts[post].numberOfBaths,
          rooms: posts[post].numberOfRooms,
          minimumStay: posts[post].minimumStay,
        });

        console.log(posts[post].posterName);
        console.log(posts[post].imagesUrls[0]);
      }

      this.setState({
        roomsList: rooms,
      });
    });
  }
  render() {
    // let housePosts = [];
    // for (let i = 0; i < this.state.roomsList.length; i++) {
    //   housePosts.push(<HouseCard name={this.roomsList[i].poster} mainimageLink="https://firebasestorage.googleapis.com/v0/b/community-housing-c73c2.appspot.com/o/HouseImages%2F200397916.jpg?alt=media&token=53e06e97-c8fb-42ef-a4b4-e3e71ebeea42"
    //   postDescription="Hello everyone, I am looking for a two roomates to occupy one bedroom in 2b/2bath apartment......" cityName="San Jose"/>);
    // }

    // this.setState({
    //   roomsList:rooms
    // });

    // {this.state.items.map((item) => {
    //   return (
    //     <li key={item.id}>
    //       <h3>{item.title}</h3>
    //       <p>brought by: {item.user}</p>
    //     </li>
    //   )
    // })}
    // let houseList = [];
    // for (let i = 0; i < 2; i++) {
    //   houseList.push(<HouseCard name={} />);

    // }

    return (
      <div className="roomsList">
        {/* <HouseCard name="Anique" mainimageLink="https://firebasestorage.googleapis.com/v0/b/community-housing-c73c2.appspot.com/o/HouseImages%2F200397916.jpg?alt=media&token=53e06e97-c8fb-42ef-a4b4-e3e71ebeea42"
        postDescription="Hello everyone, I am looking for a two roomates to occupy one bedroom in 2b/2bath apartment......" cityName="San Jose"/> */}

        {this.state.roomsList.map((post) => {
          return (
            <HouseCard
              name={post.poster}
              email={post.email}
              mainimageLink={post.mainImage}
              postDescription={post.description}
              cityName={post.postCity}
              rentCost={post.rentCost}
              rooms={post.rooms}
              baths={post.baths}
              minimumStay={post.minimumStay}
            />
          );
        })}
      </div>
    );
  }
}

export default RoomsList;
