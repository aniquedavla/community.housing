import React from 'react';
import { Button } from 'reactstrap';
import {NavLink} from "react-router-dom"
import { Redirect } from 'react-router-dom';
import '../App.css';
import { IconButton } from '@material-ui/core';
import AddCircleIcon from '@material-ui/icons/AddCircle';


// React button component that directs the user to houseForm to post a house/ Room
class ListHouse extends React.Component {

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
      return <Redirect to='/PostHousing' />
    }
  }
  render() {

    return (
      <div className="center">
      {this.renderRedirect()}
        <AddCircleIcon onClick={this.setRedirect} color="inherit" fontSize="large"></AddCircleIcon>
      </div>
    );
  }
}

export default ListHouse;
