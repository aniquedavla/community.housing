import React from 'react';
import { Button } from 'reactstrap';
import {NavLink} from "react-router-dom"
import { Redirect } from 'react-router-dom'
import '../App.css';


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
      return <Redirect to='/Register' />
    }
  }
  render() {

    return (
      <div className="center">
      {this.renderRedirect()}
        <Button onClick={this.setRedirect} color="primary"> List Your House
        </Button>{' '}
      </div>
    );
  }
}

export default ListHouse;
