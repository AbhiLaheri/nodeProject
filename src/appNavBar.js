import React, { Component } from 'react';
//import { Button, FormControl, NavDropdown,Form,Nav,Navbar } from 'react-bootstrap';
import './template/css/style.css'
export default class AppNavbar extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }


    render() {
        return (
<header id="header" class="fixed-top">
    <div class="container">

      <div class="logo float-left">
       
       
        <a href="#intro" class="scrollto"><h3>Query Solver</h3></a>
      </div>

      <nav class="main-nav float-right d-none d-lg-block">
        <ul>
          <li class="active"><a href="#intro">Home</a></li>
          <li><a href="#about">About Us</a></li>
          <li><a href="#services">Services</a></li>
          <li><a href="#team">Team</a></li>
          <li><a href="#contact">Login</a></li>
		  <li><a href="#portfolio">Sign Up</a></li>
        </ul>
      </nav>
      
    </div>
  </header>
        )
    }
}