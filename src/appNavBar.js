import React, { Component } from 'react';
//import { Button, FormControl, NavDropdown,Form,Nav,Navbar } from 'react-bootstrap';
import {BrowserRouter as Router, Route, Link } from "react-router-dom";
<<<<<<< HEAD
import Login from './login';
import './template/css/style.css';
=======
import './template/css/style.css'
>>>>>>> c9e36021034ae02c78c6f177ec7754855557a5f1
import Home from './home';
import UserQuery from './userQuery';
import Emp from './Emp1';
import Admin from './admin';
import Login1 from './login1';
import SignUp1 from './signUp';
export default class AppNavbar extends Component {
    constructor(props) {
        super(props);
        this.state = {
        tokens:"",
        // userSession:""
        }
    }
    componentDidMount(){
    //   this.setState({
    //     userSession: localStorage.getItem('myCat')
    // });
    }


    render() {
        return (
          <Router >
            <div>
           
          <Route exact path="/" component={Home} />
          {/* <Route exact path="/signup" component={UserSignUp} /> */}
          <Route exact path="/user" component={UserQuery} />
          <Route exact path="/emp" component={Emp} />
          <Route exact path="/admin" component={Admin} />
          <Route exact path="/login1" component={Login1} />
          <Route exact path="/signup" component={SignUp1} />
          </div>
        
         </Router>
        )
    }
}