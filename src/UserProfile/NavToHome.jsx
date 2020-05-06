import React from 'react';
import { Button } from 'reactstrap';
import {NavLink} from "react-router-dom"
import { Redirect } from 'react-router-dom';
import '../App.css';
import { IconButton } from '@material-ui/core';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import AccountCircle from '@material-ui/icons/AccountCircle';
import logo from '../HomePage/logo.png'




// React button component that directs the user to houseForm to post a house/ Room
class NavToHome extends React.Component {

  state = {
    redirect : false
  }

  setRedirect = () => {
    this.setState({
      redirect: true
    })
  }

  renderRedirect = () => {
    if (this.state.redirect) {
      return <Redirect to='/' />
    }
  }
  render() {

    return (
      <div className="center" onClick={this.setRedirect}>
      {this.renderRedirect()}
      <img
            width={70.54}
            height={45.54}
            src={logo}
            alt="Comm Logo"
            // onClick={goToHome}
          />

      </div>
    );
  }
}

export default NavToHome;
