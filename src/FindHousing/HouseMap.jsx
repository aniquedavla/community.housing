import React from 'react';
import NavToHouseForm from './NavToHouseForm';
import GoogleMap from './GoogleMap';
import LeafMap from './LeafMap';
import TheLeafMap from './TheLeafMap';
import LocationSearchBar from './LocationSearchBar';

class HouseMap extends React.Component {
  render() {

    return (
      <div>
        <LocationSearchBar/>
        <TheLeafMap/>

      </div>

  );
  }
}

export default HouseMap;
