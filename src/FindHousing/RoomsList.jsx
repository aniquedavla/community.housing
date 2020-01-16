import React from 'react';
import NavToHouseForm from './NavToHouseForm';
import HouseCard from './HouseCard';


class RoomsList extends React.Component {
  render() {

    return (
      <div className="center">
      <h1 className="titleColor">   Rooms List  </h1>
        
        <NavToHouseForm/>
        <HouseCard />
        <HouseCard />
        <HouseCard />
      </div>
  );
  }
}

export default RoomsList;
