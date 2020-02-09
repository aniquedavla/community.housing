import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from 'reactstrap';
import '../App.css';

const NavTopBar = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div id="NavTopBar">
      <Navbar color="warning" light expand="md">
        <NavbarBrand href="/">Home</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink href="/findHouse/">Find Housing</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="https://github.com/alseddiqa/community-housing">GitHub</NavLink>
            </NavItem>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                Options
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem>
                <NavLink href="/Register/">Sign Up</NavLink>
                </DropdownItem>
                <DropdownItem divider />
                <DropdownItem>
                  <NavLink href="/SignIn/">Sign In</NavLink>
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default NavTopBar;

// import React from 'react';
//
//
// const Empty = () => (
//
//   <div>
//
//   </div>
//
// );
//
// // function HelloWorld(props)
// // {
// //   return (
// //
// //     <div>
// //
// //       <h2> Hello Community Housing, <em> (props.name) </em> </h2>
// //
// //     </div>
// //
// //   );
// // }
//
// export default Empty;
