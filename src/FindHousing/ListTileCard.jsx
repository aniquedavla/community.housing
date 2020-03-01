import React from 'react';
import RoomIcon from '@material-ui/icons/Room';
import PersonIcon from '@material-ui/icons/Person';
import AttachMoneyIcon from '@material-ui/icons/AttachMoney';
import HotelIcon from '@material-ui/icons/Hotel';
import BathtubIcon from '@material-ui/icons/Bathtub';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import ListSubheader from '@material-ui/core/ListSubheader';
import IconButton from '@material-ui/core/IconButton';
import InfoIcon from '@material-ui/icons/Info';

class ListTileCard extends React.Component {

  constructor(props)
  {
    super(props);

    this.state = {

    }
  }

  render() {
    return (
      <div>
        <GridListTile key={this.props.poster}>
        <img src={this.props.mainimageLink} alt={"Listing Image"} />
        <GridListTileBar
            title={this.props.community}
            subtitle= {<span>by: {this.props.name}</span>}
            actionIcon={
                <IconButton aria-label={`info about ${this.props.rooms}`}>
                {this.props.rooms} <HotelIcon color="primary" fontSize="large"/> {this.props.baths} <BathtubIcon color="primary" fontSize="large"/> 
                </IconButton>
            }
        />
        </GridListTile>
      </div>
    );
  }
}
export default ListTileCard;
