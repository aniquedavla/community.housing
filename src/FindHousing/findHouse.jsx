import React from 'react';
import { Grid, GridList, GridListTile,ListSubheader, Box} from "@material-ui/core";
import ListHouse from './ListHouse';
import HouseMap from './HouseMap';
import RoomsList from './RoomsList';
import LocationSearchBar from './LocationSearchBar';
import PopUpMenu from './PopUpMenu';
import '../App.css';
import FilterListTab from './FilterListTab';
import { makeStyles } from '@material-ui/core/styles';


//Find housing page has two sides, map and list of rooms
//User to allow the user to search for housing in a specfic location for the chosen community
class findHouse extends React.Component {
  
  render() {
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

    return (
      <div>
      <Grid container className="find-house-grid-container"  styles={styles}>
          <Grid item md className="left-panel" styles={styles}>
            {/* <h1 className="title">SJSU Engineers</h1>
            <LocationSearchBar/> */}
            <Box display={{ xs: 'none', sm: 'none', md:"block" }}><HouseMap/></Box>
          </Grid>
          {/* styles.rightPanel} */}
          <Grid container alignItems= "flex-end" justify= 'flex-end'>
            <Grid item md className="right-panel" xs={12} sm={12} md={6} lg={6}>
                <Grid container className="left-grid-list">
                  <FilterListTab className="filterListTab" xs={12} sm={6} md={6} lg={12}></FilterListTab>
                  
                  {/* <GridListTile style={{ height: 'auto',  color: 'orange'}}>
                    <ListSubheader>Rooms List</ListSubheader>
                  </GridListTile> */}
                  <GridList className="housing-list"><RoomsList className="roomsList"/></GridList>
                  {/* <Grid item xs={12} sm={6} md={4} lg={4} xl={3}>
                  </Grid> */}
                </Grid>
            </Grid>
          </Grid>
      </Grid>
      </div >
      );
    }
}

export default findHouse;
