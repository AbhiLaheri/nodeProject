import React, { Component } from 'react';
import UserSignUp from './userSignUp';
//import { Button, FormControl, NavDropdown,Form,Nav,Navbar } from 'react-bootstrap';
import {BrowserRouter as Router, Route, Link } from "react-router-dom";
import Login from './login';
import './template/css/style.css';
import Home from './home';
import UserQuery from './userQuery';
export default class AppNavbar extends Component {
    constructor(props) {
        super(props);
        this.state = {
        tokens:"",
        userSession:""
        }
    }
    componentDidMount(){
      this.setState({
        userSession: localStorage.getItem('myCat')
    });
    }
    userLogOut(){
      this.setState({
      userSession: localStorage.removeItem('myCat')
    });
    }

    render() {
        return (
          <Router >
            <div>
            <nav className="navbar navbar-expand-lg navbar-light shadow-sm" style={{backgroundColor: "#e3f2fd"}}>
             <Link to="/home" className="navbar-brand lk" style={{ color : "blue", fontSize:27}}>Query Solver</Link>
             <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
             </button>
           <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
             <Link to="/home" className="nav-item nav-link lkk" style={{color : "black"}} >Home <span className="sr-only">(current)</span></Link>
             <Link to="/user" className="nav-item nav-link" style={{ color : "black" }}>Services</Link>
             {(!this.state.userSession) ? <Link to="/signup" className="nav-item nav-link" style={{ color : "black" }}>SignUp</Link>:""}
             {(!this.state.userSession) ?  <Link to="/login"className="nav-item nav-link"style={{ color : "black" }} >Login</Link> :
             <Link to="/home"className="nav-item nav-link"style={{ color : "black" }} onClick={this.userLogOut}>LogOut</Link>} 
             <Link to="/"className="nav-item nav-link"style={{ color : "black" }} onClick={this.userLogOut}>{this.state.userSession}</Link>
            </div>
           </div>
           
          </nav>
          <Route exact path="/home" component={Home} />
          <Route exact path="/signup" component={UserSignUp} />
          <Route exact path="/user" component={UserQuery} />
          <Route exact path="/login" component={Login} />
          </div>
        
         </Router>
        )
    }
}