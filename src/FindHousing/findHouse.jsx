import React from 'react';
import { Grid, GridList, GridListTile,ListSubheader} from "@material-ui/core";
import ListHouse from './ListHouse';
import HouseMap from './HouseMap';
import RoomsList from './RoomsList';
import LocationSearchBar from './LocationSearchBar';

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
            <HouseMap/>
          </Grid>
          <Grid item md className="right-panel" alignItems="flex-start" justify="flex-end">
              <GridList className="housing-grid-list" cols={2}>
                <FilterListTab></FilterListTab>
                <GridListTile style={{ height: 'auto',  color: 'orange'}}>
                  <ListSubheader>Rooms List</ListSubheader>
                </GridListTile>
                <ListHouse />
                  <RoomsList className="roomsList"/>
              </GridList>
          </Grid>
      </Grid>
      </div >
      );
    }
}

export default findHouse;
