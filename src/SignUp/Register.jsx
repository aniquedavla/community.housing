import React from 'react';
import Avatar from '@material-ui/core/Avatar';
//import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { Button } from 'reactstrap';
import { FacebookLoginButton } from 'react-social-login-buttons';
import { GoogleLoginButton } from 'react-social-login-buttons';
import { withStyles } from '@material-ui/core/styles';
import Fire from '../FireDbConfig/Fire';
import * as firebase from 'firebase';
import { Alert } from 'reactstrap';



const styles = theme => ({
  paper: {
    marginTop: theme.spacing(12),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(2.5),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(4),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
});


class Register extends React.Component {

  constructor(props) {
    super(props);
    this.signUp = this.signUp.bind(this);
    this.registerUserInfo = this.registerUserInfo.bind(this);

  }

  signUp() {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    Fire.auth().createUserWithEmailAndPassword(email, password)
      .then((u) => {
        console.log("Success signUp");
        this.registerUserInfo();
        this.props.history.push('/UserProfile');
      })
      .catch((err) => {
        console.log("Error: " + err.toString());
      })

    // var database = Fire.database();
    //
    // const firstName = document.getElementById("firstName").value;
    // const lastName = document.getElementById("lastName").value;
    // var ref = database.ref('users');
    // var data = {
    //   email: email,
    //   firstName: firstName,
    //   lastName : lastName
    // }
    // ref.push(data);
  }

  registerUserInfo() {
    var database = Fire.database();

    var uid = Fire.auth().currentUser.uid;
    const email = document.getElementById("email").value;
    const firstName = document.getElementById("firstName").value;
    const lastName = document.getElementById("lastName").value;
    var ref = database.ref('users').child(uid);


    // ref.push(data);

    ref.set({
      UserId: uid,
      bio:'Bio:.......',
      email: email,
      firstName: firstName,
      lastName: lastName
    });
  }

  render() {
    const { classes } = this.props;

    return (
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>

          <Typography component="h1" variant="h5">
            Sign up
          </Typography>
          <form className={classes.form} noValidate>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="fname"
                  name="firstName"
                  variant="outlined"
                  required
                  fullWidth
                  id="firstName"
                  label="First Name"
                  autoFocus
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  id="lastName"
                  label="Last Name"
                  name="lastName"
                  autoComplete="lname"
                />
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
                <FormControlLabel
                  control={<Checkbox value="allowExtraEmails" color="primary" />}
                  label="I want to receive housing news."
                />
              </Grid>
            </Grid>

            <Button onClick={this.signUp} color="warning" size="lg" block>Register</Button>
            <FacebookLoginButton block />
            <GoogleLoginButton block />


            <Grid container justify="flex-end">
              <Grid item>
                <Link href="/SignIn" variant="body2">
                  Already have an account? Sign in
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

export default withStyles(styles)(Register);

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
