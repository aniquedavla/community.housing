import React from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import styled from 'styled-components';

const Wrapper = styled.div`
  width: ${props => props.width};
  height: ${props => props.height};
`;
  export default class LeafMap extends React.Component {

    componentDidMount(){
      this.map = L.map ('map' , {
        center:[58,16],
        zoom:6,
        zoomControl: false
      });

      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        detectRetina:true,
        maxZoom:20,
        maxNativeZoom:17,
      }).addTo(this.map);
      }

      render(){
        return <Wrapper width="800px" height="720p" id="map" />
      }
    }
