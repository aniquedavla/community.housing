import React from 'react';
import { Button, Form, FormGroup, Label, Input, FormText, InputGroup, InputGroupAddon } from 'reactstrap';

const HouseForm = (props) => {
  return (
    <div className="HouseFormStyle ">
    <Form>
      <FormGroup>
        <Label for="exampleEmail">Description</Label>
        <Input type="textarea" name="email" id="exampleEmail" placeholder="enter..." />
      </FormGroup>
      <FormGroup>
        <Label for="examplePassword">Address</Label>
        <Input  name="password" id="examplePassword" placeholder="enter..." />
      </FormGroup>
      <FormGroup>
        <Label for="exampleSelect">Number of Rooms</Label>
        <Input type="select" name="select" id="exampleSelect">
          <option>1</option>
          <option>2</option>
          <option>3</option>
          <option>4</option>
          <option>5</option>
        </Input>
      </FormGroup>
      <FormGroup>
        <Label for="exampleSelectMulti">Number of Bathrooms</Label>
        <Input type="select" name="selectMulti" id="exampleSelectMulti">
          <option>1</option>
          <option>2</option>
          <option>3</option>
          <option>4</option>
          <option>5</option>
        </Input>
      </FormGroup>
      <FormGroup>
        <Label for="exampleText">Additional Information</Label>
        <Input type="email" name="text" id="exampleText" />
      </FormGroup>
      <FormGroup>
        <Label for="exampleFile">Pictures</Label>
        <Input type="file" name="file" id="exampleFile" />
        <Input type="file" name="file" id="exampleFile" />
        <Input type="file" name="file" id="exampleFile" />
        <FormText color="muted">
          You need to add at least one image!
        </FormText>
      </FormGroup>
      <FormGroup tag="fieldset">
        <legend> Minimum Stay</legend>
        <FormGroup check>
          <Label check>
            <Input type="radio" name="radio1" />{' '}
            6 Months
          </Label>
        </FormGroup>
        <FormGroup check>
          <Label check>
            <Input type="radio" name="radio1" />{' '}
            1 year
          </Label>
        </FormGroup>
        <FormGroup check disabled>
          <Label check>
            <Input type="radio" name="radio1" />{' '}
            + 1.5 year
          </Label>
        </FormGroup>
      </FormGroup>
      <FormGroup Rent Cost>
        <Label  Rent Cost>
          Rent Cost
        </Label>
        <InputGroup>
        <InputGroupAddon addonType="prepend">$</InputGroupAddon>
        <Input placeholder="Amount" min={0} max={1000} type="number" step="1" />
      </InputGroup>
      </FormGroup>
      <Button color="success">Post it !</Button>{' '}
    </Form>
  </div>

  );
}

export default HouseForm;
