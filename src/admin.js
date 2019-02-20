import React, { Component } from 'react';
import { Button, FormControl, NavDropdown,Form,Nav,Navbar } from 'react-bootstrap';
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
      <NavDropdown title="Query For :" id="basic-nav-dropdown">
        <NavDropdown.Item href="#action/3.1">Flipkart</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">Amazon</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Myntra</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Shein</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Club Factory</NavDropdown.Item>
      </NavDropdown>
    </Nav>
    <Form inline>
      <Button variant="outline-success">LogOut</Button>
    </Form>

  </Navbar.Collapse>
</Navbar>
        )
    }
}