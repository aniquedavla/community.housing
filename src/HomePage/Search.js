import React from 'react';
import { Button } from 'reactstrap';
import {NavLink} from "react-router-dom"
import { Redirect } from 'react-router-dom'

class Search extends React.Component {

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
      return <Redirect to='/findHouse' />
    }
  }
  render() {

    return (
      <div className="center">
      {this.renderRedirect()}
        <Button onClick={this.setRedirect} color="warning"> Search
        </Button>{' '}
      </div>
    );
  }
}

export default Search;
