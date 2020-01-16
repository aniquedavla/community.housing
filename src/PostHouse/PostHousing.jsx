import React from 'react';
import HouseForm from './HouseForm';
import Fire from '../FireDbConfig/Fire';
import { Button } from 'reactstrap';



class PostHousing extends React.Component {

  constructor(props) {
        super(props);
        this.logout = this.logout.bind(this);
    }


    logout() {
        Fire.auth().signOut();
    }
  render() {

    return (

      <div className>

      <h1 className="titleColor">   Post your house </h1>

      <HouseForm />

      </div>

    );
  }
}

export default PostHousing;
//      <Button onClick={this.logout} color="warning" size="lg" block>logout</Button>
