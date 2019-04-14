import React, { Component } from 'react';
//import { Button, FormControl, NavDropdown,Form,Nav,Navbar } from 'react-bootstrap';
import {BrowserRouter as Router, Route, Link } from "react-router-dom";
import './template/css/style.css'
import Home from './Home';
import UserQuery from './user/userQuery';
import Emp from './employee/Emp1';
import Admin from './admin/admin';
import Login1 from './login1';
import SignUp1 from './user/signUp';
import Email from './employee/email';
import PieGraph from './admin/pieGraph';
import BarGraph from './admin/barGraph';
import AddEmployee from './admin/addEmployee';
import UserAllQuery from './user/userAllQuery';
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
          <Route exact path="/user" component={UserQuery} />
          <Route exact path="/emp" component={Emp} />
          <Route exact path="/admin" component={Admin} />
          <Route exact path="/login1" component={Login1} />
          <Route exact path="/signup" component={SignUp1} />
          <Route exact path="/email" component={Email} />
          <Route exact path="/piegraph" component={PieGraph} />
          <Route exact path="/barGraph" component={BarGraph} />
          <Route exact path="/addemployee" component={AddEmployee} />
          <Route exact path="/userallquery" component={UserAllQuery} />
          </div>
        
         </Router>
        )
    }
}