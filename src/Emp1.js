import React, { Component } from "react";
import AppNavbar from "./appNavBar";
// import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Nav from "./navbar";
//import "./template/css/style.css";
//import { Button, Form, Col } from 'react-bootstrap';
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
    
    if (localStorage.getItem("myCat")) {
      localStorage.setItem("myCat", "Abhishek");
      console.log("begin login");
      fetch("http://localhost:8000/availableEpmloyee", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          name: this.state.name,
          password: this.state.password
          //address: 'yourOtherValue',
          //phone_number:"123",
          //salary:"1235"
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
         <Nav userSession={this.state.userSession}/>
      <div
        style={{
          marginLeft: "25%",
          marginTop: "5%",
          marginRight: "25%",
          textAlign: "center"
        }}>
        <div
          class="card text-black shadow-sm rounded"
          style={{ maxWidth: "38rem" }}
        >
          <div class="card-header  text-white rounded"  style={{backgroundColor:"#8c73f2"}}>Assigned Work</div>
          <div class="card-body rounded" style={{backgroundColor:"white"}}>
            <h5 class="card-title" >Primary card title</h5>
            <p class="card-text">
              Some quick example text to build on the card title and make up
              the.
            </p>
            <button
              href="#"
              class="btn btn-primary shadow-sm mb-6 "
              style={{ minWidth: "6rem", marginLeft: "6%" }}
            >
              Solve
            </button>
            <button
              href="#"
              class="btn btn-danger mb-6  shadow-sm m-4 "
              style={{ minWidth: "6rem", marginRight: "1%" }}
            >
              Reassign
            </button>
          </div>
        </div>
      </div>
      </div>
    );
  }
}
