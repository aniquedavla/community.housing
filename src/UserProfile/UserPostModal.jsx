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
import DeleteIcon from '@material-ui/icons/Delete';
import Box from '@material-ui/core/Box';
import Fire from '../FireDbConfig/Fire';
import { Redirect } from 'react-router-dom';
import { useHistory } from 'react-router-dom';


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


   

  // const handleClose = () => {
  //   setOpen(false);
  // };

  



  const deletePost = () => {

    console.log(props.postId);
    var database = Fire.database();
    var ref = database.ref('housePosts').child(props.postId);
    
    ref.remove();     
   

    
    props.handleClick();
    window.location.href = '/UserProfile';


    

  };

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
                {props.listOfImages.map((image) => {
                  return (
                    <div>
                      <img src={image} />
                    </div>
                  );
                })}
                {/* <img src={props.mainimageLink} /> */}
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
                {/* <h5>
                  <AccessTimeIcon color="grey" fontSize="medium" />
                  {"  "}Date Posted: X
                </h5> */}
              </div>
              <div>
                <h3>{props.title}</h3>
                <p style={{ fontSize: "20px" }}>{props.postDescription}</p>
                <h4> Additional Info</h4>
                <p style={{ fontSize: "20px" }}>{props.additionalInfo}</p>
              </div>
            </div>
            <br></br>
            <hr></hr>
            {/* <div style={{ textAlign: "right" }}>
              <h5
                style={{
                  color: "grey",
                  paddingBottom: "-20px",
                }}
              >
                {props.name}
              </h5>
              <h3>{props.email}</h3>
            </div> */}
            <Box paddingLeft={19}>
            <Button style={{backgroundColor: "#dd2c00" , color: "#fafafa"}} size={'large'} onClick={deletePost} className="size">Delete Post <DeleteIcon/> </Button>{' '}

            </Box>

          </div>
        </Fade>
      </Modal>
    </div>
  );
}
