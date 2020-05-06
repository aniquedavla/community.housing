import React from 'react';
import { Button } from 'reactstrap';
import {NavLink} from "react-router-dom"
import { Redirect } from 'react-router-dom';
import '../App.css';
import { IconButton } from '@material-ui/core';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import AccountCircle from '@material-ui/icons/AccountCircle';



// React button component that directs the user to houseForm to post a house/ Room
class NavToCommunity extends React.Component {

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
      return <Redirect to='/FindHouse' />
    }
  }
  render() {

    return (
      <div className="center">
      {this.renderRedirect()}
      </div>
    );
  }
}

export default NavToCommunity;
