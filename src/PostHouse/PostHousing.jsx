import React from 'react';
import HouseForm from './HouseForm';
import Fire from '../FireDbConfig/Fire';
import { Button } from 'reactstrap';
import { Redirect } from 'react-router-dom';
import '../App.css'
import CustomizedSnackbars from '../Components/Alerts'
import Snackbar from '@material-ui/core/Snackbar';
import IconButton from '@material-ui/core/IconButton';
import SignIn from '../Login/SignIn';
import TopBar from './HouseForm';






class PostHousing extends React.Component {

  constructor(props) {
        super(props);
        this.logout = this.logout.bind(this);
        if (this.state && !this.state.user) {
          this.state = ({
            user: null,
          });
        }
        this.authListener = this.authListener.bind(this);
    }

    componentDidMount() {
      this.authListener();
    }
  
    authListener() {
      Fire.auth().onAuthStateChanged((user) => {
        if (user) {
          this.setState({ user });
        } else {
          this.setState({ user: null });
        }
      });
    }


    logout() {
        Fire.auth().signOut();
    }

    checkUser()
    {
      return <Redirect to={{ pathname: '/SignIn', state: { redirectUrl: '/PostHousing' } }} />;
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

    let renderComponent;
    if (this.state) {
      let userin = this.state ? this.state.user : null;

      if (!userin) {
        renderComponent = <SignIn/>
      } else {
        renderComponent =
        <div className="postHousePageContainer">
      <h1 className="postHousePageTitle"> Post Your House </h1>
      <HouseForm changeStatus={this.props.changeStatus}/>
      </div>
    }
  }
    return (
      <div className="postHousePageContainer">
      {renderComponent}
      </div>

    );
  }
}

export default PostHousing;
//      <Button onClick={this.logout} color="warning" size="lg" block>logout</Button>
