import React from 'react';
import logo from './logo.svg';
import './App.css';
import TopNavBar from './HomePage/TopNavBar';
import Home from './HomePage/Home';
import FindHouse from './FindHousing/FindHouse';
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
import PrivateRoute from './HomePage/PrivateRoute';
import UserProfile from './UserProfile/UserProfile';


class App extends Component {

  constructor() {
    super();
    this.state = ({
      showMessage: false,
      testing: "hello i am here to test a prop"
    });
    this.authListener = this.authListener.bind(this);
    this.updateSuccessMessage = this.updateSuccessMessage.bind(this);

    if (this.state && !this.state.user) {
      this.state = ({
        user: null,
      });
    }

    this.findHouse = React.createRef();


  }

  updateSuccessMessage(data){
    console.log("this is the state rn", this.state.showMessage)
    console.log(data)
    this.setState({
      showMessage: data
    })
  }

  componentDidMount() {
    this.authListener();
  }

  authListener() {
    Fire.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({ user });
        localStorage.setItem('user', user.uid);
      } else {
        this.setState({ user: null });
        localStorage.removeItem('user');
      }
    });
  }

  functionCallFromApp = (city) => {
    console.log(city);
    this.findHouse.current.getSearchFromApp(city);

  }
  

  render(){
    return(
        <BrowserRouter>

          <div id="topNavBar">
            
            {/* {this.state.user ? (<Redirect to='/PostHousing'/>): (<NavTopBar/> )} */}

            {/* <NavTopBar/>  */}
            <TopNavBar passSearchToApp={this.functionCallFromApp} ></TopNavBar>
            <Switch>
              <Route path="/" component={Home} exact />
              <Route path="/FindHouse"  render={(props) => <FindHouse  ref={this.findHouse} learning={this.state.testing} alertMessage={this.state.showMessage}/> }/>
              <Route path="/PostHousing" component={PostHousing} exact render={(props) => (<PostHousing {...this.props} changeStatus={this.updateSuccessMessage}/>)}/>
              <Route path="/Register" component={Register} exact />
              <Route path="/SignIn" component={SignIn} exact />
              <Route path="/UserProfile" component={UserProfile} exact />
              {/* <PrivateRoute authed={this.state.user} path='/Register' component={Register} /> */}

              <Route component={PageError} />
            </Switch>

          </div>

      </BrowserRouter>
    )
  }

}

export default App;

//render={(props) => (<PostHousing {...this.props} changeStatus={this.updateSuccessMessage}/>)}  

// <BrowserRouter>
//
//<Route path="/findHouse" component={findHouse} exact/>
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
