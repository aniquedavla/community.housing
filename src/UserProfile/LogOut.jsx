import React from 'react';
import Fire from '../FireDbConfig/Fire';
// import { Button } from 'reactstrap';
import { Redirect } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';



const styles = theme => (theme => ({
    button:{
      margin: theme.spacing(1),
      spacing: 8,
  }
  }));

class LogOut extends React.Component {

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
    
    const { classes } = this.props;

    return (

      <div className>
      {this.renderRedirect()}
      <Button className={classes.button} m={2} variant="outlined" color="secondary" onClick={() => { this.logout(); this.setRedirect();}}>
        Logout
      </Button>


      </div>

    );
  }
}

export default withStyles(styles)(LogOut);
//      <Button onClick={this.logout} color="warning" size="lg" block>logout</Button>
