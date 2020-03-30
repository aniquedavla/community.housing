import React from 'react';
import logo from './logo.svg';
import './App.css';
import TopNavBar from './HomePage/TopNavBar';
import Home from './HomePage/Home';
import findHouse from './FindHousing/findHouse';
import {BrowserRouter, Route, Switch} from "react-router-dom";
import PageError from './HomePage/PageError';
import PostHousing from './PostHouse/PostHousing';
import Register from './SignUp/Register';
import SignIn from './Login/SignIn';
import { Component } from 'react';
import Fire from './FireDbConfig/Fire';
import { Redirect } from 'react-router-dom';
import NavBarTest from './NavBarTest'
import 'firebase/database';
import HomeNavBar from './HomePage/HomeNavBar';
import UserProfile from './UserProfile/UserProfile';


class App extends Component {

  constructor() {
    super();
    this.state = ({
      user: null,
      showMessage: false
    });
    this.authListener = this.authListener.bind(this);
    this.updateSuccessMessage = this.updateSuccessMessage.bind(this);

  }

  updateSuccessMessage(data){
    this.setState({
      showMessage: data
    })
  }

  componentDidMount() {
    this.authListener();
  }

  authListener() {
    Fire.auth().onAuthStateChanged((user) => {
      console.log(user);
      if (user) {
        this.setState({ user });
        localStorage.setItem('user', user.uid);
      } else {
        this.setState({ user: null });
        localStorage.removeItem('user');
      }
    });
  }

  render(){
    return(
        <BrowserRouter>

          <div id="topNavBar">
            {/* {this.state.user ? (<Redirect to='/PostHousing'/>): (<NavTopBar/> )} */}

            {/* <NavTopBar/>  */}
            <TopNavBar></TopNavBar>
            <Switch>
              <Route path="/" component={Home} exact />
              <Route path="/findHouse" render={(props) =>  <findHouse showMessage={this.state.showMessage}/>}/>
              <Route path="/PostHousing" render={(props) =>  <PostHousing showMessageState={this.updateSuccessMessage}/>} />
              <Route path="/Register" component={Register} exact />
              <Route path="/SignIn" component={SignIn} exact />
              <Route path="/UserProfile" component={UserProfile} exact />

              <Route component={PageError} />
            </Switch>

          </div>

      </BrowserRouter>
    )
  }

}

export default App;


// <BrowserRouter>
//
//   <div>
//     <Switch>
//       <Route path="/" component={Home} exact />
//       <Route path="/findHouse" component={findHouse} exact />
//       <Route path="/PostHousing" component={PostHousing} exact />
//       <Route path="/Register" component={Register} exact />
//       <Route path="/SignIn" component={SignIn} exact />
//
//
//       <Route component={PageError} />
//
//     </Switch>
//
//   </div>
//
// </BrowserRouter>
