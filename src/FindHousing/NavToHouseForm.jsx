import React from 'react';
import { Button } from 'reactstrap';
import {NavLink} from "react-router-dom"
import { Redirect } from 'react-router-dom'

class NavToHouseForm extends React.Component {

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
        <Button onClick={this.setRedirect} color="primary"> List Your House
        </Button>{' '}
      </div>
    );
  }
}

export default NavToHouseForm;
