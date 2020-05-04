import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Button from "@material-ui/core/Button";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { CarouselCaption } from "reactstrap";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import "../App.css";
import { gridLayer } from "leaflet";
import BathtubIcon from "@material-ui/icons/Bathtub";
import HotelIcon from "@material-ui/icons/Hotel";
import AccessTimeIcon from "@material-ui/icons/AccessTime";
import EventIcon from "@material-ui/icons/Event";

function getModalStyle() {
  return {
    top: "10%",
    left: "15%",
    right: "15%",
    botton: "10%",
  };
}

const useStyles = makeStyles((theme) => ({
  paper: {
    position: "absolute",
    //width: 400,
    backgroundColor: theme.palette.background.paper,
    //border: "2px solid #000",
    borderRadius: "5px",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    maxHeight: "80%",
    overflowY: "auto",
  },
}));

export default function SimpleModal(props) {
  const classes = useStyles();
  // getModalStyle is not a pure function, we roll the style only on the first render
  const [modalStyle] = React.useState(getModalStyle);
  // const [open, setOpen] = React.useState(false);

  // const handleOpen = () => {
  //   setOpen(true);
  // };

  // const handleClose = () => {
  //   setOpen(false);
  // };

  return (
    <div>
      <Modal
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
        open={props.modalIsOpen}
        onClose={props.handleClick}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={props.modalIsOpen}>
          <div style={modalStyle} className={classes.paper}>
            <Button
              variant="contained"
              color="primary"
              onClick={props.handleClick}
              style={{ position: "sticky", float: "right", fontSize: "15px" }}
            >
              X
            </Button>
            <h2 id="simple-modal-title">
              ${props.rentCost} | {props.cityName}
            </h2>
            <hr></hr>
            <div className="CarousalContainer">
              <Carousel className="ImageCarousal" autoPlay>
                <div>
                  <img src={props.mainimageLink} />
                </div>
              </Carousel>
            </div>
            <div className="DetailedModalGridWrapper">
              <div
                style={{
                  backgroundColor: "#DEDEDE",
                  borderRadius: "7px",
                  padding: "1rem",
                }}
              >
                <h5>
                  <HotelIcon color="grey" fontSize="medium" />
                  {"  "}
                  Rooms: {props.rooms}
                </h5>
                <h5>
                  <BathtubIcon color="grey" fontSize="medium" />
                  {"  "}
                  Baths: {props.baths}
                </h5>
                <h5>
                  <EventIcon color="grey" fontSize="medium" />
                  {"  "}Minimum Stay: {props.minimumStay}
                </h5>
                <h5>
                  <AccessTimeIcon color="grey" fontSize="medium" />
                  {"  "}Date Posted: X
                </h5>
              </div>
              <div>
                <h3>{props.postDescription}</h3>
                <p style={{ fontSize: "20px" }}>
                  Private room approx 110 sq feet, mirrored closet, new laminate
                  wood floor. Queen bed available if needed. $750/mo plus $350
                  security deposit. Single professional working or student
                  female only. Shared bathroom, kitchen, laundry room.
                </p>
              </div>
            </div>
            <br></br>
            <hr></hr>
            <div style={{ textAlign: "right" }}>
              <h5
                style={{
                  color: "grey",
                  paddingBottom: "-20px",
                }}
              >
                {props.name}
              </h5>
              <h3>{props.email}</h3>
            </div>
            {/* <Button
              variant="contained"
              color="primary"
              style={{ float: "right", fontSize: "20px" }}
            >
              Contact
            </Button> */}
          </div>
        </Fade>
      </Modal>
    </div>
  );
}
