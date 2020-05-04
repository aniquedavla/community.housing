import React from 'react';
import {NavLink} from "react-router-dom";
import { Redirect } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';
import Icon from '@material-ui/core/Icon';
import SearchIcon from '@material-ui/icons/Search';
import AddIcon from '@material-ui/icons/Add';
import RequestCommunity from './RequestCommunity';



//search button in the home page
const styles = theme => (theme => ({
  button:{
    margin: theme.spacing(1),
    spacing: 8,
}
}));

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
      return <Redirect to='/FindHouse' />
    }
  }
  render() {
    const { classes } = this.props;

    return (
      <div className="center buttonsMain">
      {this.renderRedirect()}
      <Button className={classes.button} m={2} variant="outlined" color="primary" onClick={this.setRedirect}>
        Search
        <SearchIcon color="#3f51b5"/>
      </Button>

      {/* <Button className={classes.button} m={2} variant="outlined" color="primary" onClick={this.setRedirect}>
         Community
        <AddIcon color="#3f51b5"/>
      </Button> */}
      <RequestCommunity />
        
      </div>
    );
  }
}

export default withStyles(styles)(Search);
