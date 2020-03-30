import React from 'react';
import HouseForm from './HouseForm';
import Fire from '../FireDbConfig/Fire';
import { Button } from 'reactstrap';
import { Redirect } from 'react-router-dom';
import CustomizedSnackbars from '../Components/Alerts'
import Snackbar from '@material-ui/core/Snackbar';
import IconButton from '@material-ui/core/IconButton';



class PostHousing extends React.Component {

  constructor(props) {
        super(props);
        this.logout = this.logout.bind(this);
    }


    logout() {
        Fire.auth().signOut();
    }

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

      <div className>
      
        
      <h1 className="postHousePageTitle"> Post Your House </h1>

      <HouseForm />
      {this.renderRedirect()}
      <Button onClick={() => { this.logout(); this.setRedirect();}} color="warning" size="lg" block>Logout</Button>

      <div>
        
      </div>
      </div>


    );
  }
}

export default PostHousing;
//      <Button onClick={this.logout} color="warning" size="lg" block>logout</Button>
