import React from 'react';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import UserRooms from './UserRooms';
import Container from '@material-ui/core/Container';
import { withStyles } from '@material-ui/core/styles';
import Fire from '../FireDbConfig/Fire';
import RoomsList from '../FindHousing/RoomsList';
import SignIn from '../Login/SignIn';
import { Redirect } from 'react-router-dom';
import LogOut from './LogOut';
import ProfileEditDialog from './ProfileEditDialog';
import HomeNavBar from '../HomePage/HomeNavBar';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';





const styles = theme => (theme => ({
  icon: {
    marginRight: theme.spacing(2),
  },
  heroContent: {
    backgroundColor: theme.palette.primary.main,
    padding: theme.spacing(500, 0, 500),
    color: theme.palette.primary.main,
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  cardMedia: {
    paddingTop: '56.25%', // 16:9
  },
  cardContent: {
    flexGrow: 1,
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6),
  },
}));

const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];
class UserProfile extends React.Component {

  // userName = "";
  // email = "";

  constructor(props) {
    super(props);
    if (this.state && !this.state.user) {
      this.state = ({
        user: null,
        userName : "",
        email : "",
        bio:""
      });
    }
    this.authListener = this.authListener.bind(this);
    this.getUserInfo = this.getUserInfo.bind(this);

  }

  componentDidMount() {
    this.authListener();
  }

  authListener() {
    Fire.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({ user });
        this.getUserInfo();
      } else {
        this.setState({ user: null });
      }
    });
  }

  getUserInfo() {

    if (this.state && this.state.user != null) {
      var uid = this.state.user.uid;
      var database = Fire.database();

      var theName, theEmail, theBio;

      var ref = database.ref('users').child(uid).on('value', (snapshot) => {

        theName = snapshot.child('firstName').val() + " " + snapshot.child('lastName').val();
        theEmail = snapshot.child('email').val();
        theBio = snapshot.child('bio').val();

        this.setState ({
          userName: theName,
          email: theEmail,
          bio:theBio
        })

      });

    }
  }

  render() {
    const { classes } = this.props;

    let renderComponent;
    if (this.state) {
      let userin = this.state ? this.state.user : null;

      if (!userin) {
        return <Redirect to={{ pathname: '/SignIn', state: { redirectUrl: '/UserProfile' } }} />;
      } else {
        renderComponent =
          <main className="userProfile">
            {/* Hero unit */}
            <div className={classes.heroContent} >
              <HomeNavBar/>
              <Container maxWidth="sm" >

                <Typography id="name" component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
                  {this.state.userName}
                </Typography>
                <Typography id="email" variant="h5" align="center" color="textSecondary" paragraph>
                  {this.state.email}
                </Typography>
                <Typography variant="h5" align="center" color="textSecondary" paragraph>
                {this.state.bio}
              </Typography>
                <Typography variant="h5" align="center" color="textSecondary" paragraph>
                  Welcome in! You may edit or delete any room listing
              </Typography>
                <div className={classes.heroButtons}>
                  <Grid container spacing={2} justify="center">
                    <Grid item>
                      <Button variant="contained" color="primary">
                        My Posts
                    </Button>
                    </Grid>
                    <Grid item>
                      {/* <Button variant="outlined" color="primary">
                        Edit Profile
                    </Button> */}
                    <ProfileEditDialog/>
                    </Grid>
                  </Grid>
                </div>
              </Container>
            </div>
            <Container className={classes.cardGrid} maxWidth="md">
              <Grid>
                <UserRooms></UserRooms>
              </Grid>
            </Container>
          </main>;
      }
    }
    return (

      <React.Fragment>
        <CssBaseline />
        {renderComponent}
        {/* Footer */}
        <footer className={classes.footer}>
          <Typography variant="h6" align="center" gutterBottom>
            <LogOut/>
          </Typography>
          <Typography variant="subtitle1" align="center" color="textSecondary" component="p">
            End of your profile!
          </Typography>
        </footer>
        {/* End footer */}
      </React.Fragment>

    );
  }
}



export default withStyles(styles)(UserProfile);