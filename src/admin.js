import React, { Component } from 'react';
import { Button, NavDropdown, Form, Nav, Navbar, Row, Col } from 'react-bootstrap';
export default class Admin extends Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }


  render() {
    return (

      <Navbar bg="light" expand="lg">
        <Navbar.Brand href="#home">HOME</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <NavDropdown title="Allotment For Query" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Executive 1</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Executive 2</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Executive 3</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Executive 4</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Executive 5</NavDropdown.Item>
            </NavDropdown>

          </Nav>



          <Button variant="outline-success">LogOut</Button>


        </Navbar.Collapse>
      </Navbar>
      <input
        type="radio"
        label="Flipkart"
        name="formHorizontalRadios"
        id="formHorizontalRadios1"
      />
      <input
        type="radio"
        label="Amazon"
        name="formHorizontalRadios"
        id="formHorizontalRadios2"
      />
      <input
        type="radio"
        label="Myntra"
        name="formHorizontalRadios"
        id="formHorizontalRadios3"
      />
      <input
        type="radio"
        label="Shein"
        name="formHorizontalRadios"
        id="formHorizontalRadios3"
      />
      <input
        type="radio"
        label="Club Factory"
        name="formHorizontalRadios"
        id="formHorizontalRadios3"
      />
        )
  }
}