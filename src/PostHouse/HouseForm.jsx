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
      phoneNumber: "",
      showError: "error",
      photoRequiredError: false,
    

    }
    this.handleChange = this.handleChange.bind(this);
    this.createFileUpload = this.createFileUpload.bind(this);
    this.storeHouseImages = this.storeHouseImages.bind(this);
    this.handleChange2 = this.handleChange2.bind(this); 
    this.onClickTesting = this.onClickTesting.bind(this);
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



  //To post house to firebase
  //this method gets called after pictures are uploaded to the array

  // if (i === this.fileArray2.length - 1) {
  
  // }


  async postHouse() {
    var user = Fire.auth().currentUser;
    if(user===null){
    console.log("null")
    }
    else{
      var uid = user.uid;
    }
    
    // TO DO : add error checking before posting 


    if (user != null) {

      // console.log(user.email);
      // console.log(user.uid);
      // console.log(document.readyState);

      var database = Fire.database();

      // const description = document.getElementById("description").value;
      // const address = document.getElementById("address").value;
       const numberOfRooms = document.getElementById("numberOfRooms").value;
       const numberOfBaths = document.getElementById("numberOfBaths").value;
      // const additionalInfo = document.getElementById("additionalInfo").value;
      // const maximumStay = document.getElementById("maximumStay").value;
      // const rentCost = document.getElementById("rentCost").value;
      // const city = document.getElementById("city").value;
      // const zipcode = document.getElementById("zipcode").value;
      // const state = document.getElementById("state").value

        var posterName, email;

        this.storeHouseImages();

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
        .then((u) => {
          this.setState({showSuccessMessage: true})
          console.log("success!")
          this.props.history.push('/findHouse')
        })
        .catch((err) => {
          console.log("Error: " + err.toString());
        })
        //var postKey = storeRef.push().key;
        //console.log(storeRef.push().key)
        //this.storeHouseImages(postKey);
      });

    }
   


  }

  handleChange2(event){
    this.setState({
      [event.target.name]: event.target.value,
      startDate: event.date.formate()
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
    return isError;
  }

  onClickTesting(e){
    e.preventDefault()
    let error = this.validate()
    if(error === true){
      this.setState({
        showFailureMessage: true
      })
    console.log("LOOK AT ME")
    this.props.changeStatus(true)
    console.log(this.state.titleErrorMessage, this.state.showTitleError)
    }
    else{
      console.log("aldsfjakl;jfl;akjfl;sd")
      this.postHouse()
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
          }.bind(this))
        }.bind(this));
      }
      
    }

    this.setState({
      imagesUrls: imageUrls
    });

    return;


    // uploadTask.on('state_changed', function(snapshot) {

    // }, function(error){

    // }, function(snapshot){
    //   var imgUrl = snapshot.ref.getDownloadURL().downloadURL;
    //   console.log(imgUrl);
    //   // var updates = {};
    //   // var housePost = {

    //   //   image1Url: imgUrl,
    //   //   user: user.uid
    //   // }
    //   // updates['/HousePostsImages' + postKey] = housePost;
    //   // Fire.database().ref().update(updates);
    // });

  }


  render() {
    //console.log(this.state.showError)
    
    let uploadDivs = [];
    for (let i = 0; i < this.state.uploadDivsCount; i++) {
      uploadDivs.push(<Input type="file" id="houseImage3" onChange={this.handleChange(i+3)} style={{marginBottom:"5px"}} />);
      uploadDivs.push(<img alt=" " width="100" height="100" src={this.state.file[i+3]} />);


    }

    console.log(this.state.file.length, "dlkjsflkjafk")

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
            <MaterialUIPickers name="startDate" onChange={this.handleChange2}></MaterialUIPickers>
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

          <div style={{marginBottom: "10px"}}>
            <Label style={{marginBottom: "0px"}}>Phone number</Label>
            <FormattedInputs 
              name="phoneNumber" 
              onChange={this.handleChange2}
              style={{float: "left"}}

            />
          </div>

          <div style={{marginBottom:'10px'}} >
            <Label style={{display: "block", marginBottom:'-10px'}}>Additional information</Label>
            <TextField multiline={true} rows="2" margin="normal" height="" helperText="" placeholder="enter..." variant="outlined" error={false} fullWidth ></TextField>
          </div>
          
          <Label>Pictures</Label>
          <Input style={{marginBottom:"5px"}} type="file" id="houseImage1" onChange={this.handleChange(0)} />
            {this.state.photoRequiredError && <FormHelperText error={true}>&nbsp;Required</FormHelperText>}
          <img alt=" " width="100" height="100" id="houseImage1" src={this.state.file[0]}/>
          
          <div style={{display: "flex", justifyContent: "start"}}>
          <div style={{display: "flex", flexDirection: "column"}}>
          {uploadDivs}
          </div>
          </div>
          
          <div>
          <IconButton disableFocusRipple={true} size="small" style={{marginBottom: "30px"}}><AddAPhotoIcon style={{color: "grey"}} fontSize="large" onClick={this.createFileUpload}/></IconButton>
          </div> 
        
          {/* <Button onClick={this.postHouse} color="success">Post it !</Button>{' '} */}
          <div className="centerButton" style={{marginBottom:"100px"}}>

          
          
          <Button style={{backgroundColor: "#3f51b5"}} onClick={this.storeHouseImages} className="size">Post My Home</Button>{' '}
          
          </div>
          <div>
          <Button type="submit">Testing</Button> 
          {this.state.title} ....... {this.state.description}.....{this.state.startDate}
          </div>

        </Form>
      </div>

    );
  }
}

// const HouseForm = (props) => {
//   return (
//     <div className="HouseFormStyle ">
//     <Form>
//       <FormGroup>
//         <Label for="exampleEmail">Description</Label>
//         <Input type="textarea" name="email" id="exampleEmail" placeholder="enter..." />
//       </FormGroup>
//       <FormGroup>
//         <Label for="examplePassword">Address</Label>
//         <Input  name="password" id="examplePassword" placeholder="enter..." />
//       </FormGroup>
//       <FormGroup>
//         <Label for="exampleSelect">Number of Rooms</Label>
//         <Input type="select" name="select" id="exampleSelect">
//           <option>1</option>
//           <option>2</option>
//           <option>3</option>
//           <option>4</option>
//           <option>5</option>
//         </Input>
//       </FormGroup>
//       <FormGroup>
//         <Label for="exampleSelectMulti">Number of Bathrooms</Label>
//         <Input type="select" name="selectMulti" id="exampleSelectMulti">
//           <option>1</option>
//           <option>2</option>
//           <option>3</option>
//           <option>4</option>
//           <option>5</option>
//         </Input>
//       </FormGroup>
//       <FormGroup>
//         <Label for="exampleText">Additional Information</Label>
//         <Input type="email" name="text" id="exampleText" />
//       </FormGroup>
//       <FormGroup>
//         <Label for="exampleFile">Pictures</Label>
//         <Input type="file" name="file" id="exampleFile" />
//         <Input type="file" name="file" id="exampleFile" />
//         <Input type="file" name="file" id="exampleFile" />
//         <FormText color="muted">
//           You need to add at least one image!
//         </FormText>
//       </FormGroup>
//       <FormGroup tag="fieldset">
//         <legend> Minimum Stay</legend>
//         <FormGroup check>
//           <Label check>
//             <Input type="radio" name="radio1" />{' '}
//             6 Months
//           </Label>
//         </FormGroup>
//         <FormGroup check>
//           <Label check>
//             <Input type="radio" name="radio1" />{' '}
//             1 year
//           </Label>
//         </FormGroup>
//         <FormGroup check disabled>
//           <Label check>
//             <Input type="radio" name="radio1" />{' '}
//             + 1.5 year
//           </Label>
//         </FormGroup>
//       </FormGroup>
//       <FormGroup Rent Cost>
//         <Label  Rent Cost>
//           Rent Cost
//         </Label>
//         <InputGroup>
//         <InputGroupAddon addonType="prepend">$</InputGroupAddon>
//         <Input placeholder="Amount" min={0} max={1000} type="number" step="1" />
//       </InputGroup>
//       </FormGroup>
//       <Button color="success">Post it !</Button>{' '}
//     </Form>
//   </div>
//
//   );
// }

export default withRouter(HouseForm);
