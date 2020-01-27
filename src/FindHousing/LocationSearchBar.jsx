import React from 'react';
import { InputGroup, InputGroupAddon, Button, Input } from 'reactstrap';


class LocationSearchBar extends React.Component {
  render() {

    return (
      <div>

        <InputGroup className="LocationSearch" >
        <Input placeholder="Search" />
        <InputGroupAddon addonType="append">
          <Button color="warning"> go</Button>
        </InputGroupAddon>
      </InputGroup>
      <br />

      </div>

);

  }
}

export default LocationSearchBar;

// <div className="LocationSearch">
// <input className="form-control my-0 py-1 amber-border" type="text" placeholder="Search" aria-label="Search"  style={{borderRadius: '100px'}} />
// <div className="input-group-append">
//   <p1 >
//     .
//   </p1>
// </div>
// </div>
