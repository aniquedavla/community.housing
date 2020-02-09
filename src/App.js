import React from 'react';
import logo from './logo.svg';
import './App.css';
import NavTopBar from './HomePage/NavTopBar';
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
import 'firebase/database';

class App extends Component {

  constructor() {
    super();
    this.state = ({
      user: null,
    });
    this.authListener = this.authListener.bind(this);
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

            <NavTopBar/> 
            <Switch>
              <Route path="/" component={Home} exact />
              <Route path="/findHouse" component={findHouse} exact />
              <Route path="/PostHousing" component={PostHousing} exact />
              <Route path="/Register" component={Register} exact />
              <Route path="/SignIn" component={SignIn} exact />
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
