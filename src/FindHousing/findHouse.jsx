import React from 'react';
import { Grid, GridList, GridListTile,ListSubheader, Box} from "@material-ui/core";
import ListHouse from './ListHouse';
import HouseMap from './HouseMap';
import RoomsList from './RoomsList';
import LocationSearchBar from './LocationSearchBar';
import PopUpMenu from './PopUpMenu';
import '../App.css';
import FilterListTab from './FilterListTab';

//Find housing page has two sides, map and list of rooms
//User to allow the user to search for housing in a specfic location for the chosen community
class findHouse extends React.Component {
  
  
  render() {
    const styles = {
      Grid: {}
    }
    return (
      <div>
      <Grid container className="find-house-grid-container"  styles={styles}>
          <Grid item md className="left-panel" styles={styles}>
            {/* <h1 className="title">SJSU Engineers</h1>
            <LocationSearchBar/> */}
            <Box display={{ xs: 'none', sm: 'none', md:"block" }}><HouseMap/></Box>
          </Grid>
          <Grid item md className="right-panel" alignItems="flex-start" justify="flex-end">
              <Grid className="left-grid-list">
                <FilterListTab className="filterListTab"></FilterListTab>
                {/* <GridListTile style={{ height: 'auto',  color: 'orange'}}>
                  <ListSubheader>Rooms List</ListSubheader>
                </GridListTile> */}
                <GridList className="housing-list"><RoomsList className="roomsList"/></GridList>
                {/* <Grid item xs={12} sm={6} md={4} lg={4} xl={3}>
                </Grid> */}
              </Grid>
          </Grid>
      </Grid>
      </div >
      );
    }
}

export default findHouse;
