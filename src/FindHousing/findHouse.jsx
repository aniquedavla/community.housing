import React from 'react';
import { Grid, GridList, GridListTile, ListSubheader, Box } from "@material-ui/core";
import ListHouse from './ListHouse';
import HouseMap from './HouseMap';
import RoomsList from './RoomsList';
import LocationSearchBar from './LocationSearchBar';
import PopUpMenu from './PopUpMenu';
import '../App.css';
import FilterListTab from './FilterListTab';
import { makeStyles } from '@material-ui/core/styles';
import Success from '../Components/SuccessMessage' 


//Find housing page has two sides, map and list of rooms
//User to allow the user to search for housing in a specfic location for the chosen community
class FindHouse extends React.Component {

  constructor(props)
  {
    super(props);
    this.state = ({
      successMessage: "Housing post successful!"
    })
    this.roomsListElement = React.createRef();
    
  }

  render() {
    console.log(this.props.learning)
    const styles = makeStyles(theme => ({
      Grid: {},
      rightPanel: {
        // padding: '5rem',
        // display: 'flex',
        // width: '50%',
        // height: '100%',
        // alignItems: 'flex-end',
        // justify: 'flex-end',
        // [theme.breakpoints.down('sm')]: {
        //   width: '100%',
        // },
        // [theme.breakpoints.up('md')]: {
        //   width: '50%',
        // },
        // [theme.breakpoints.up('lg')]: {
        //   width: '50%',
        // },
      },
    }));

    const sortHouses = () => {
      this.roomsListElement.current.sortHomes();
    }

    const sortRecentRoom = () => {
      this.roomsListElement.current.sortRecentHomes();
    }

    return (


      <div>
        <Success message={this.state.successMessage}></Success>
        <Grid container className="find-house-grid-container" styles={styles}>
          <Grid item md className="left-panel" styles={styles}>
            <Box display={{ xs: 'none', sm: 'none', md: "block" }}><HouseMap /></Box>
          </Grid>
          <Grid container alignItems="flex-end" justify='flex-end'>
            <Grid item md className="right-panel" xs={12} sm={12} md={6} lg={6}>
              <Grid container className="left-grid-list">
                {/* xs={12} sm={12} md={12} lg={12} */}
                <FilterListTab className="filterListTab" test="hello" sortRecentFun={sortRecentRoom} sortFun={sortHouses}></FilterListTab>
                <GridList className="housing-list"><RoomsList ref={this.roomsListElement} /></GridList>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </div >
    );
  }
}

export default FindHouse;