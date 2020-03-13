import React from 'react';
import { Map, GoogleApiWrapper } from 'google-maps-react';

const mapStyles = {
width: '100%',
height: '100%',
};

export class GoogleMap extends React.Component {

  

  render() {

    return (
      <Map
          google={this.props.google}
          zoom={8}
          style={mapStyles}
          initialCenter={{ lat: 47.444, lng: -122.176}}
        />
  );
  }
}

export default GoogleApiWrapper ({
  apiKey: 'AIzaSyCh32VrB5QUwaGTSOjxmd50X69vll1Zqe4'
})(GoogleMap);
