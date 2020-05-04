import React from "react";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button,
} from "reactstrap";
import RoomIcon from "@material-ui/icons/Room";
import PersonIcon from "@material-ui/icons/Person";
import AttachMoneyIcon from "@material-ui/icons/AttachMoney";
import HotelIcon from "@material-ui/icons/Hotel";
import BathtubIcon from "@material-ui/icons/Bathtub";
import DetailedModal from "./DetailedModal";

class HouseCard extends React.Component {
  //list of images urls is called listOfImages
  constructor(props) {
    super(props);

    this.state = {
      modalIsOpen: false,
    };
  }

  onCardClick = () => {
    this.setState({ modalIsOpen: !this.state.modalIsOpen });
  };

  render() {
    return (
      <div className="HouseCard">
        <DetailedModal
          modalIsOpen={this.state.modalIsOpen}
          handleClick={this.onCardClick}
          {...this.props}
        />
        <Card onClick={this.onCardClick}>
          <CardTitle>
            {" "}
            <PersonIcon color="primary" /> {this.props.name}{" "}
          </CardTitle>
          <CardImg
            height="150px"
            width="50px"
            src={this.props.mainimageLink}
            alt="Card image cap"
          />

          <CardBody>
            <CardTitle>
              {" "}
              <RoomIcon color="secondary" /> {this.props.cityName}
            </CardTitle>
            <CardSubtitle>{this.props.community}</CardSubtitle>
            <CardText> {this.props.title}</CardText>
            <CardTitle>
              {" "}
              {this.props.rooms} <HotelIcon color="primary" fontSize="small" />{" "}
              {this.props.baths}{" "}
              <BathtubIcon color="primary" fontSize="small" />{" "}
            </CardTitle>

            <CardTitle>
              {" "}
              <AttachMoneyIcon style={{ color: "#4caf50" }} />{" "}
              {this.props.rentCost}
            </CardTitle>
          </CardBody>
        </Card>
      </div>
    );
  }
}

export default HouseCard;

/* <div className="HouseCard">
<Card>
<CardTitle>{this.state.user} </CardTitle>
  <CardImg top width="100%" src="/Images/roomimage.jpg" alt="Card image cap" />
  <CardBody>
    <CardTitle>San Jose</CardTitle>
    <CardSubtitle>Muslims Community</CardSubtitle>
    <CardText>Hello everyone, I am looking for a two roomates to occupy one bedroom in 2b/2bath apartment......</CardText>
    <Button color="secondary"> View </Button>{' '}
  </CardBody>
</Card>
</div> */
