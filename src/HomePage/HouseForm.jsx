import React from 'react';
import { Button, Form, FormGroup, Label, Input, FormText, InputGroup, InputGroupAddon } from 'reactstrap';

const HouseForm = (props) => {
  return (
    <div className="HouseFormStyle">
    <Form>
      <FormGroup>
        <Label for="exampleEmail">Description</Label>
        <Input type="email" name="email" id="exampleEmail" placeholder="enter..." />
      </FormGroup>
      <FormGroup>
        <Label for="examplePassword">Address</Label>
        <Input type="password" name="password" id="examplePassword" placeholder="enter..." />
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
        <Input type="textarea" name="text" id="exampleText" />
      </FormGroup>
      <FormGroup>
        <Label for="exampleFile">Pictures</Label>
        <Input type="file" name="file" id="exampleFile" />
        <FormText color="muted">
          This is some placeholder block-level help text for the above input.
          It's a bit lighter and easily wraps to a new line.
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
            <Input type="radio" name="radio1" disabled />{' '}
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
      <Button color="success">Submit</Button>{' '}
    </Form>
  </div>

  );
}

export default HouseForm;
