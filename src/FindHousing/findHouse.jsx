import React from 'react';
import NavToHouseForm from './NavToHouseForm';
import HouseMap from './HouseMap';
import RoomsList from './RoomsList';
import LeafMap from './LeafMap';

//Find housing page has two sides, map and list of rooms
//User to allow the user to search for housing in a specfic location for the chosen community
class findHouse extends React.Component {
  render() {

    return (<div className="container-fluid p">
      <div className="row ">
        <div className="col-8 leftPanel p">
          <h1 className="titleColor">
            SJSU Engineers
          </h1>

          <HouseMap/>

        </div>
        <div className="col-4 rightPanel p">
          <RoomsList/>

        </div>
      </div>
    </div>);
  }
}

export default findHouse;
