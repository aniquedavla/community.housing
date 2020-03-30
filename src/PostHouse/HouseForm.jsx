import React from 'react';
import { Col, Row, Button, Form, FormGroup, Label, Input, FormText, InputGroup, InputGroupAddon } from 'reactstrap';
import Fire from '../FireDbConfig/Fire';
import {withRouter} from 'react-router-dom'
import Success from '../Components/SuccessMessage'

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
      successMessage: false
    }
    this.handleChange = this.handleChange.bind(this);
    this.createFileUpload = this.createFileUpload.bind(this);
    this.storeHouseImages = this.storeHouseImages.bind(this);
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
  async postHouse() {
    var user = Fire.auth().currentUser;
    var uid = user.uid;
    // TO DO : add error checking before posting 


    if (user != null) {
      // console.log(user.email);
      // console.log(user.uid);
      // console.log(document.readyState);

      var database = Fire.database();

      const description = document.getElementById("description").value;
      const address = document.getElementById("address").value;
      const numberOfRooms = document.getElementById("numberOfRooms").value;
      const numberOfBaths = document.getElementById("numberOfBaths").value;
      const additionalInfo = document.getElementById("additionalInfo").value;
      const minimumStay = document.getElementById("minimumStay").value;
      const maximumStay = document.getElementById("maximumStay").value;
      const rentCost = document.getElementById("rentCost").value;
      const city = document.getElementById("city").value;
      const zipcode = document.getElementById("zipcode").value;
      const state = document.getElementById("state").value

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
          description: description,
          address: address,
          numberOfRooms: numberOfRooms,
          numberOfBaths: numberOfBaths,
          additionalInfo: additionalInfo,
          rentCost: rentCost,
          imagesUrls: this.state.imagesUrls,
          minimumStay: minimumStay,
          maximumStay: maximumStay,
          city: city,
          state: state,
          zipcode: zipcode

        }

        storeRef.push(postData)
        //var postKey = storeRef.push().key;
        //console.log(storeRef.push().key)
        //this.storeHouseImages(postKey);
      });

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
                console.log("Success posting")
                //this.props.history.push('/findHouse');
                console.log(this.state.successMessage)
                this.props.updateMessage(this.state.successMessage)
                this.setState({successMessage: true})
                console.log(this.state.successMessage)

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


    let uploadDivs = [];
    for (let i = 0; i < this.state.uploadDivsCount; i++) {
      uploadDivs.push(<Input type="file" id="houseImage3" onChange={this.handleChange(i+3)} />);
      uploadDivs.push(<img alt=" " width="100" height="100" src={this.state.file[i+3]} />);
    }

    return (

      <div className="HouseFormStyle">
       
        <Form >
        <FormGroup>
            <Label for="address">Address</Label>
            <Input name="field2" id="address" placeholder="enter..." />
          </FormGroup>
        <Row form>
        <Col md={6}>
          <FormGroup>
            <Label for="city">City</Label>
            <Input type="text" name="city" id="city"/>
          </FormGroup>
        </Col>
        <Col md={4}>
          <FormGroup>
            <Label for="state">State</Label>
            <Input type="text" name="state" id="state"/>
          </FormGroup>
        </Col>
        <Col md={2}>
          <FormGroup>
            <Label for="zipcode">Zip</Label>
            <Input type="text" name="zip" id="zipcode"/>
          </FormGroup>  
        </Col>
      </Row>
          <div className="column">
          <Row>
          <Col md={6}>
          <FormGroup>
            <Label for="exampleSelect">Number of Rooms</Label>
            <Input type="select" name="select" id="numberOfRooms">
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
            </Input>
          </FormGroup>
          </Col>
          <Col md={6}>
          <FormGroup>
            <Label for="exampleSelectMulti">Number of Bathrooms</Label>
            <Input type="select" name="selectMulti" id="numberOfBaths">
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
            </Input>
          </FormGroup>
          </Col>
          </Row>
          <Row>
          <Col md={6}>
          <FormGroup>
            <Label for="exampleSelect">Minimum Stay</Label>
            <Input type="select" name="select" id="minimumStay">
              <option>6 Months</option>
              <option>1 year</option>
              <option>+ 1.5 years</option>
              <option>No Minimum</option>
            </Input>
          </FormGroup>
          </Col>
          <Col md={6}>
          <FormGroup>
            <Label for="exampleSelect">Maximum Stay</Label>
            <Input type="select" name="select" id="maximumStay">
              <option>2 years</option>
              <option>3 years</option>
              <option>No Maximum Requirement</option>
            </Input>
          </FormGroup>
          </Col>
          </Row>
          <Row>
          <Col md={6}>
          <FormGroup Rent Cost>
            <Label Rent Cost>
              Rent Cost
        </Label>
            <InputGroup>
              <InputGroupAddon addonType="prepend">$</InputGroupAddon>
              <Input placeholder="Amount" min={0} max={1000} type="number" step="1" id="rentCost" />
            </InputGroup>
          </FormGroup>
          </Col>
          </Row>
          </div>
          <FormGroup>
            <Label for="exampleEmail">Description</Label>
            <Input type="textarea" name="field1" id="description" placeholder="enter..." />
          </FormGroup>
          <FormGroup>
            <Label for="exampleText">Additional Information</Label>
            <Input type="email" name="text" id="additionalInfo" />
          </FormGroup>
          <FormGroup>
            <Label for="exampleFile">Pictures</Label>

            <Input type="file" id="houseImage1" onChange={this.handleChange(0)} />
            <img alt=" " width="100" height="100" src={this.state.file[0]} />

            {uploadDivs}

            <FormText color="muted">
              You need to add at least one image!

        </FormText>
            <Button onClick={this.createFileUpload} color="info">Add more !</Button>{' '}

          </FormGroup>

          
          {/* <Button onClick={this.postHouse} color="success">Post it !</Button>{' '} */}
          <Button onClick={this.storeHouseImages} className="size" color="success">Post My Home</Button>{' '}
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
