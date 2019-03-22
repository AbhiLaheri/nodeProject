import React, { Component } from "react";
import AppNavbar from "./appNavBar";
// import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Nav from "./navbar";
//import "./template/css/style.css";
//import { Button, Form, Col } from 'react-bootstrap';
import "./template/css/prac.css";
export default class Emp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userSession: false
    };
  }
  componentDidMount() {
    if (localStorage.getItem("myCat")) {
      this.setState({
        userSession: true
      });
    }
    console.log("token",localStorage.getItem("email_token"));
    if (localStorage.getItem("myCat")) {
      localStorage.setItem("myCat", "Abhishek");
      console.log("begin login");
      fetch("http://localhost:8000/emp_check_assigned_work", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
         emp_email:"emp2@gmail.com"

        })
      })
        .then(response => response.json())
        .then(responseJson => {
          console.log(responseJson);
          this.setState({
            msg: responseJson.message
          });
        })
        .catch(error => {
          console.error(error);
        });
    }
  }

  render() {
    return (
      <div>
        <Nav userSession={this.state.userSession} />
        
        <div
          className="mt-1 "
          style={{
            marginLeft: "8%",
            marginRight: "2%",
            marginTop: "4%" ,
            alignSelf: "1px auto"
            }}  >
          <div className="row  " style={{ minHeight:"600px", marginTop:"50px"}}>
          <div className="col-sm-3  ">
              <div className="card ">
                <div className="card-body bg-primary ">
                  <h5 className="card-title ">User Details </h5>
                </div>
                <ul className="list-group list-group-flush">
                  <li className="list-group-item">ss</li>
                </ul>
              </div>
            </div>
          
            <div className="col-sm-8  ">
              <div className="card ">
                <div className="card-body bg-primary ">
                  <h5 className="card-title ">User Query </h5>
                </div>
                <ul className="list-group list-group-flush">
                  <li className="list-group-item">ss</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
