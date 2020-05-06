import React from "react";
import UserPost from "./UserPost";
import Fire from "../FireDbConfig/Fire";


class UserRooms extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      roomsList: [],
      user: null,
    };
    this.authListener = this.authListener.bind(this);
    this.getUserPosts = this.getUserPosts.bind(this);
  }

  authListener() {
    Fire.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({ user });
        this.getUserPosts();
      } else {
        this.setState({ user: null });
      }
    });
  }

  componentDidMount() {
    this.authListener();
  }

  //A method that fetches user's posts
  getUserPosts() {
    if (this.state.user != null) {
      var uid = this.state.user.uid;

      var database = Fire.database();

      let rooms = [];

      var ref = database.ref("housePosts");


      ref.on("value", (snapshot) => {
        let posts = snapshot.val();
        console.log(posts);

        for (let post in posts) {
          var id = posts[post].posterId;
          if (id === uid) {
            console.log("id"+ post)


            rooms.push({
              title: posts[post].title,
              poster: posts[post].posterName,
              email: posts[post].email,
              description: posts[post].description,
              imagesList: posts[post].imagesUrls,
              postCity: posts[post].city,
              rentCost: posts[post].reantCost,
              baths: posts[post].numberOfBaths,
              rooms: posts[post].numberOfRooms,
              minimumStay: posts[post].minimumStay,
              postId:post

            });
          }
        }

        this.setState({
          roomsList: rooms,
        });
      });
    }
  }

  render() {
    return (
      <div className="roomsList">
        {/* <HouseCard name="Anique" mainimageLink="https://firebasestorage.googleapis.com/v0/b/community-housing-c73c2.appspot.com/o/HouseImages%2F200397916.jpg?alt=media&token=53e06e97-c8fb-42ef-a4b4-e3e71ebeea42"
        postDescription="Hello everyone, I am looking for a two roomates to occupy one bedroom in 2b/2bath apartment......" cityName="San Jose"/> */}

        {this.state.roomsList.map((post) => {
          return (
            <UserPost
              title={post.title}
              name={post.poster}
              email={post.email}
              mainimageLink={post.imagesList[0]}
              listOfImages={post.imagesList}
              postDescription={post.description}
              cityName={post.postCity}
              rentCost={post.rentCost}
              rooms={post.rooms}
              baths={post.baths}
              minimumStay={post.minimumStay}
              postId={post.postId}
            />
          );
        })}
      </div>
    );
  }
}

export default UserRooms;
