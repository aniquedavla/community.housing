import React from 'react';
import { Col, Row, Button, Form, FormGroup, Label, Input, FormText, InputGroup, InputGroupAddon } from 'reactstrap';
import Fire from '../FireDbConfig/Fire';
import {withRouter} from 'react-router-dom'
import Success from '../Components/SuccessMessage'
import IconButton from '@material-ui/core/IconButton';
import AddIcon from '@material-ui/icons/Add';
import TextField from '@material-ui/core/TextField';
import { FormHelperText } from '@material-ui/core';
import InputAdornment from '@material-ui/core/InputAdornment';
import InputBase from '@material-ui/core/InputBase';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import MaterialUIPickers from '../Components/DatePicker'
import AddPhotoAlternateIcon from '@material-ui/icons/AddPhotoAlternate';
import AddAPhotoIcon from '@material-ui/icons/AddAPhoto';
import FormattedInputs from '../Components/NumberField'
import Failure from '../Components/FailMessage'


class HouseForm extends React.Component {

  fileArray = [];
  fileArray2 = [];
  imagesUrls = [];

  constructor(props) {
    super(props);
    this.uploadDivsCount = 0;
    this.postHouse = this.postHouse.bind(this);

    this.state = {
      file: [],
      uploadDivsCount: 0,
      imageUrls: [],
      showFailureMessage: false,
      successMessage: "Posting Successful!",
      title:"",
      showTitleError: false,
      titleErrorMessage:"",
      description:"",
      descriptionErrorMessage:"",
      showDescriptionError: false,
      rent: 0,
      rentErrorMessage: "",
      showRentError: false,
      minStay: "",
      minStayErrorMessage: '',
      showMinStayError: false,
      address: "",
      addressErrorMessage: '',
      showAddressError: false,
      zipCode: "",
      zipCodeErrorMessage: "",
      showZipCodeError: false,
      state: "",
      stateErrorMessage: "",
      showStateError: false,
      city: "",
      cityErrorMessage: "",
      showCityError: false,
      startDate: "",
      iAmTesting: {startDate: null},
      phoneNumber: "",
      showPhoneNumberError: false,
      phoneNumberErrorMessage: "",
      showError: "error",
      photoRequiredError: false,
    

    }
    this.handleChange = this.handleChange.bind(this);
    this.createFileUpload = this.createFileUpload.bind(this);
    this.storeHouseImages = this.storeHouseImages.bind(this);
    this.handleChange2 = this.handleChange2.bind(this); 
    this.handleOnClick = this.handleOnClick.bind(this);
    this.testing = this.testing.bind(this);
  }

  handleChange = index => e => {
    console.log(index);
    // this.setState({
    //   file: URL.createObjectURL(e.target.files[0])

    // })
    this.fileArray[index] = URL.createObjectURL(e.target.files[0]);
    this.fileArray2[index] = e.target.files[0];

    this.setState({
      file: this.fileArray
    })
    // this.fileObj.push(e.target.files)
    //     for (let i = 0; i < this.fileObj[0].length; i++) {
    //         this.fileArray.push(URL.createObjectURL(this.fileObj[0][i]))
    //     }
    //     this.setState({ file: this.fileArray })
  }

  createFileUpload() {
    var counter = this.state.uploadDivsCount;
    counter++;
    this.setState({ uploadDivsCount: counter });
    //console.log(this.fileArray[0]);
  }


  async postHouse() {
    var user = Fire.auth().currentUser;
    if(user===null){
    console.log("null")
    }
    else{
      var uid = user.uid;
    }

    if (user != null) {

      var database = Fire.database();
       const numberOfRooms = document.getElementById("numberOfRooms").value;
       const numberOfBaths = document.getElementById("numberOfBaths").value;
       var posterName, email;
        var ref = database.ref('users').child(uid).on('value', (snapshot) => {
        // console.log(snapshot.child('firstName').val());
        // console.log(snapshot.child('lastName').val());
        // console.log(snapshot.child('email').val());
        posterName = snapshot.child('firstName').val() + " " + snapshot.child('lastName').val();
        email = snapshot.child('email').val();

        var storeRef = database.ref('housePosts');


        var postData = {
          //email: email,
          //posterName: posterName,
          //posterId: uid,
          title: this.state.title,
          description: this.state.description,
          rentCost: this.state.rent,
          minimumStay: this.state.minStay,
          address: this.state.address,
          zipCode: this.state.zipCode,
          state: this.state.state,
          city: this.state.city,
          numberOfRooms: numberOfRooms,
          numberOfBaths: numberOfBaths,
          imagesUrls: this.state.imagesUrls
        }

        storeRef.push(postData)
        
        //var postKey = storeRef.push().key;
        //console.log(storeRef.push().key)
        //this.storeHouseImages(postKey);
      });

    }
  }

  handleChange = index => e => {
    console.log(index);
    // this.setState({
    //   file: URL.createObjectURL(e.target.files[0])

    // })
    this.fileArray[index] = URL.createObjectURL(e.target.files[0]);
    this.fileArray2[index] = e.target.files[0];

    this.setState({
      file: this.fileArray
    })
    // this.fileObj.push(e.target.files)
    //     for (let i = 0; i < this.fileObj[0].length; i++) {
    //         this.fileArray.push(URL.createObjectURL(this.fileObj[0][i]))
    //     }
    //     this.setState({ file: this.fileArray })
  }

  handleChange2(event){
    this.setState({
      [event.target.name]: event.target.value,
    })
  }

  testing(e){
    this.setState({
      iAmTesting: {startDate: e.target.value}
    })
  }

  validate() {
    let isError = false;
    this.setState({
      showTitleError: false,
      titleErrorMessage:"",
      descriptionErrorMessage:"",
      showDescriptionError: false,
      rentErrorMessage:"",
      showRentError: false,
      showMinStayError: false,
      minStayErrorMessage: "",
      showAddressError: false,
      addressErrorMessage: "",
      showZipCodeError: false,
      zipCodeErrorMessage: "",
      showStateError: false,
      stateErrorMessage: "",
      showCityError: false,
      cityErrorMessage: "",
      photoRequiredError: false
    })

    if (this.state.file.length===0) {
      isError = true
      this.setState({
        photoRequiredError: true
      })
    }
    if (this.state.title.length < 1){
      isError = true
      this.setState({
        titleErrorMessage: "Required",
        showTitleError: true
      })
    }
    if(this.state.description.length < 1){
      isError = true
      this.setState({
        descriptionErrorMessage: "Required",
        showDescriptionError: true
      })
    }
    if(this.state.rent <= 0){
      isError = true
      this.setState({
        rentErrorMessage: "Required",
        showRentError: true
      })
    }
    if(this.state.minStay.length < 1){
      isError = true
      this.setState({
        minStayErrorMessage: "Required",
        showMinStayError: true
      })
    }
    if(this.state.address.length < 1){
      isError = true
      this.setState({
        addressErrorMessage: "Required",
        showAddressError: true
      })
    }
    if(this.state.zipCode.length < 1){
      isError = true
      this.setState({
        zipCodeErrorMessage: "Required",
        showZipCodeError: true
      })
    }
    if(this.state.state.length < 1){
      isError = true
      this.setState({
        stateErrorMessage: "Required",
        showStateError: true
      })
    }
    if(this.state.city.length < 1){
      isError = true
      this.setState({
        cityErrorMessage: "Required",
        showCityError: true
      })
    }
    if(this.state.phoneNumber<1){
      isError = true
      this.setState({
        phoneNumberErrorMessage: "Required",
        showPhoneNumberError: true
      })
    }
    return isError;
  }

  handleOnClick(e){
    e.preventDefault()
    console.log(this.state.file)
    let error = this.validate()
    if(error === true){ 
    console.log("LOOK AT ME")
    }
    else{
      console.log("aldsfjakl;jfl;akjfl;sd")
      this.props.changeStatus(true)
      this.storeHouseImages();
    }
  }

  //Method to store images to the database, it also creates
  //downloadurls in order to save them in the database for each post
  storeHouseImages() {
    // const data = new FormData();
    // data.append('file', this.fileArray[0]);
    var imageUrls = [];
    for (let i = 0; i < this.fileArray2.length; i++) {
      if (this.fileArray2[i]) {
        var user = Fire.auth().currentUser;
        var imageName = this.fileArray2[i].name;
        var storageRef = Fire.storage().ref('/HouseImages/' + imageName);
        var uploadTask = storageRef.put(this.fileArray2[i]).then(function (snapshot) {
        var imageUrl = snapshot.ref.getDownloadURL().then(function (downloadUrl) {
            //console.log(downloadUrl);
            imageUrls.push(downloadUrl);
            if (i === this.fileArray2.length - 1) {
              this.postHouse()
              .then((u) => {
                this.setState({showSuccessMessage: true})
                console.log("success!")
                this.props.history.push('/findHouse')
              })
              .catch((err) => {
                console.log("Error: " + err.toString());
              })
            }
          }.bind(this))
        }.bind(this));
      }
      
    }

    this.setState({
      imagesUrls: imageUrls
    });

    return;
  }

  render() {   
    let uploadDivs = [];
    for (let i = 0; i < this.state.uploadDivsCount; i++) {
      uploadDivs.push(<Input type="file" id="houseImage3" onChange={this.handleChange(i+3)} style={{marginBottom:"5px"}} />);
      uploadDivs.push(<img alt=" " width="100" height="100" src={this.state.file[i+3]} />);
    }
    console.log(this.state.startDate);
    return (

      <div className="HouseFormStyle">
        {this.state.showFailureMessage && <Failure/>}
        
        <Form onSubmit={this.onClickTesting} >
        
          <div style={{marginBottom:'10px'}}>
          
            <Label style={{display: "block", marginBottom:'-5px'}}>Title*</Label>
            <TextField 
              margin="dense" 
              helperText={this.state.titleErrorMessage}
              placeholder="enter..." 
              variant="outlined" 
              error={this.state.showTitleError} 
              style={{width: "55vh"}}
              name="title"
              onChange={this.handleChange2}
            />
          </div>
          

          <div style={{marginBottom:'10px'}} >
            <Label style={{display: "block", marginBottom:'-10px'}}>Description*</Label>
            <TextField 
              multiline={true} 
              rows="3" 
              margin="normal"  
              helperText={this.state.descriptionErrorMessage} 
              placeholder="enter..." variant="outlined" 
              error={this.state.showDescriptionError} 
              fullWidth
              name="description"
              onChange={this.handleChange2}
            />
          </div>

          <div style={{display: 'flex', marginBottom: '10px'}}>
              <div>
              <Label 
              style={{marginBottom:'-10px'}}>
              Rental Cost*
            </Label>
            <TextField
              type="number"
              error={this.state.showRentError}
              helperText={this.state.rentErrorMessage}
              margin="dense"
              name="rent"
              InputProps={{
                startAdornment: <InputAdornment position="start">$</InputAdornment>,
                endAdornment: <InputAdornment position="end">monthly</InputAdornment>
              }}
              variant="outlined" 
              onChange={this.handleChange2}            
            />
            </div>

            <div>
            <Label 
            style={{marginBottom:'-10px'}}>
              Minimum Stay*
            </Label>
            <TextField 
              helperText={this.state.minStayErrorMessage}
              name="minStay"
              margin="dense" 
              InputProps={{
                endAdornment: <InputAdornment position="end">months</InputAdornment>,
              }}
              variant="outlined" 
              error={this.state.showMinStayError} 
              onChange={this.handleChange2}
            />
            </div>
          </div>

          <div style={{marginBottom:'10px'}}>
            <Label style={{display: "block", marginBottom:'-2px'}}>Address*</Label>
            <TextField margin="dense" 
            helperText={this.state.addressErrorMessage}
            name="address" 
            placeholder="enter..." 
            variant="outlined" 
            error={this.state.showAddressError} 
            style={{width: "55vh"}}
            onChange={this.handleChange2}
           />
          </div>

          <Row style={{marginBottom:'10px'}}>
          <Col>
            <Label 
              style={{ marginBottom:'-5px'}}>
              ZIP Code*
            </Label>
            <TextField
              name="zipCode"
              error={this.state.showZipCodeError}
              helperText={this.state.zipCodeErrorMessage}
              margin="dense"
              variant="outlined"
              onChange={this.handleChange2}
            />
            </Col>

          <Col >
            <Label style={{ marginBottom:'-5px'}}>
              State*
            </Label>
            <TextField
              name="state" 
              helperText={this.state.stateErrorMessage} 
              variant="outlined" 
              error={this.state.showStateError} 
              margin="dense" 
              onChange={this.handleChange2}
            />
            </Col>

          <Col >
            <Label style={{ marginBottom:'-5px'}}>City*</Label>
            <TextField helperText="" 
            name="city"
            variant="outlined" 
            helperText={this.state.cityErrorMessage}
            error={this.state.showCityError} 
            margin="dense"
            onChange={this.handleChange2}
            ></TextField>
            </Col>
          </Row>

          <div style={{marginBottom:'10px'}}>
            <Label style={{display: "block", marginBottom:'-10px'}}>Start date*</Label>
            <MaterialUIPickers 
            name="startDate" 
            onChange={this.testing}
            >
            </MaterialUIPickers>
          </div>

          <Row style={{marginBottom:'10px'}}>
          <Col md={6} >
            <Label for="exampleSelect">Number of rooms</Label>
            <Input type="select" name="select" id="numberOfRooms">
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
            </Input>          
          </Col>

          <Col md={6}>
            <Label for="exampleSelectMulti">Number of bathrooms</Label>
            <Input type="select" name="selectMulti" id="numberOfBaths">
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
            </Input>
          
          </Col>
          </Row>  

          <div style={{marginBottom: "10px" }}>
            <Label style={{marginBottom: "0px", display: "block"}}>Phone number*</Label>
            <TextField 
              margin="dense" 
              height="" 
              helperText={this.state.phoneNumberErrorMessage} 
              placeholder="enter..." 
              variant="outlined" 
              error={this.state.showPhoneNumberError} 
              style={{width: "30vh"}}
              name="phoneNumber"
              onChange={this.handleChange2} 
            />
          </div>

          <div style={{marginBottom:'10px'}} >
            <Label style={{display: "block", marginBottom:'-10px'}}>Additional information</Label>
            <TextField multiline={true} rows="2" margin="normal" height="" helperText="" placeholder="enter..." variant="outlined" error={false} fullWidth ></TextField>
          </div>
            <FormGroup>
            <div style={{display: "flex"}}>
            <Label>Pictures*</Label>{this.state.photoRequiredError && <span style={{color: "red"}}>&nbsp;Please upload at least 1 photo.</span>}
            </div>
          <Input style={{marginBottom:"5px"}} type="file" id="houseImage1" onChange={this.handleChange(0)} />
            {this.state.photoRequiredError && <FormHelperText error={true}>&nbsp;Required</FormHelperText>}
          <img alt=" " width="100" height="100" id="houseImage1" src={this.state.file[0]}/>          
          {uploadDivs}          
          <div>
          <IconButton size="small" style={{marginBottom: "30px"}}><AddAPhotoIcon style={{color: "grey"}} fontSize="large" onClick={this.createFileUpload}/></IconButton>
          </div> 
          </FormGroup>
  
          <div className="centerButton"> 
          
          <Button style={{backgroundColor: "#3f51b5"}} onClick={this.handleOnClick} className="size">Post My Home</Button>{' '}
          
          </div>
          
        </Form>
      </div>

    );
  }
}

export default withRouter(HouseForm);
