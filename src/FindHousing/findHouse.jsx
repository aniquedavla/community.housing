import React from 'react';
import NavToHouseForm from './NavToHouseForm';
import HouseMap from './HouseMap';
import RoomsList from './RoomsList';
import LeafMap from './LeafMap';

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
