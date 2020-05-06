import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import { Redirect } from 'react-router-dom';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import LockOpenIcon from '@material-ui/icons/LockOpen';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { Button } from 'reactstrap';
import { withStyles } from '@material-ui/core/styles';
import { Component } from 'react';
import Fire from '../FireDbConfig/Fire';
import PostHousing from '../PostHouse/PostHousing';
import Register from '../SignUp/Register';
import Title from '../HomePage/Title';

const styles = theme => ({
  paper: {
    marginTop: theme.spacing(13),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(2.5),
    backgroundColor: theme.palette.success.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
});

class SignIn extends React.Component {

  constructor(props) {
    super(props);
    
    this.login = this.login.bind(this);
  }

  // state = {
  //   redirect : false
  // }

  // setRedirect(){
  //   this.setState({
  //     redirect: true
  //   })
  // }

  // renderRedirect() {
  //   if (this.state.redirect) {
  //     return <Redirect to='/PostHousing' />
  //   }
  // }

  login() {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    Fire.auth().signInWithEmailAndPassword(email, password)
      .then((u) => {
        console.log("Success login");
        
        this.setState({user: u.user});
        const redirectUrl = this.props.location.state.redirectUrl;
        console.log(redirectUrl);
        if (redirectUrl) {
          this.props.history.push(redirectUrl);

        } else {
          this.props.history.push('/');
        }
      })
      .catch((err) => {
        console.log("Error: " + err.toString());
      })

  }


  render() {
    const { classes } = this.props;

    return (

      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOpenIcon />
          </Avatar>

          <Typography component="h1" variant="h5">
            Sign In
          </Typography>
          <form className={classes.form} noValidate>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
              </Grid>
              <Grid item xs={12} sm={6}>
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="current-password"
                />
              </Grid>
              <Grid item xs={12}>
              </Grid>
            </Grid>

            <Button onClick={this.login} color="warning" size="lg" block>Login</Button>

            <Grid container justify="flex-end">
              <Grid item>
                <Link href="/Register" variant="body2">
                  Don't have an account? Join us
                </Link>
              </Grid>
            </Grid>
          </form>

        </div>
        <Box mt={5}>
        </Box>
      </Container>

    );
  }
}

export default withStyles(styles)(SignIn);

// <Button
//   type="submit"
//   fullWidth
//   variant="contained"
//   size="lg"
//   color="warning"
//   className={classes.submit}
// >
//   Sign Up
// </Button>
//{this.state.user ? (<PostHousing/>): (</PostHousing> )}
//{this.state.user ? (<Redirect to='/PostHousing'/>): (<Title/> )}


//Old SignIn set up
// constructor(props){
//   super(props);
//
//   this.login = this.login.bind(this);
//
//   this.state = {
//     user:null,
//   }
//
//   this.authListener = this.authListener.bind(this);
// }
//
// componentDidMount(){
//   this.authListener();
// }
//
// authListener()
// {
//   Fire.auth().onAuthStateChanged((user) => {
//     if(user) {
//       this.this.setState({user});
//     }
//     else {
//       this.this.setState({user:null});
//     }
//   })
//
// }
//
// login()
// {
//     const email = document.getElementById("email").value;
//     const password = document.getElementById("password").value;
//
//     Fire.auth().signInWithEmailAndPassword(email,password)
//       .then((u) => {
//         console.log("Success login")
//       })
//     .catch((err) => {
//     console.log("Error: " + err.toString());
//   })
//
// }
