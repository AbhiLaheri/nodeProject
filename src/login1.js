import React, { Component } from "react";

import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect
} from "react-router-dom";
import Nav from "./navbar";

export default class Login1 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      password: "",
      re: false,
      msg: "",
      s: false,
      typeUser: ""
    };
  }

  login() {
    if (this.state.name != "") {
      if (this.state.password != "") {
        console.log("begin login");
        fetch("http://localhost:8000/login", {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            user_email: this.state.name,
            password: this.state.password
            // user_email: "ee",
            // password: "eee"
          })
        })
          .then(response => response.json())
          .then(responseJson => {
            console.log(responseJson.validate);
            this.setState({
              msg: responseJson.message,
            });

            if(responseJson.status){
              localStorage.setItem("email_token", responseJson.validate[0].emp_email );
              this.setState({
                msg: responseJson.message,
                s: responseJson.status,
                typeUser: responseJson.validate[0].type
              });
            }
            
            console.log(
              "type check",
              this.state.typeUser,
              responseJson.message
            );
            //   if(responseJson.status){

            //     localStorage.setItem("myCat", "Abhishek");
            //     return <Redirect to="/user" />;
            //   }
          })
          .catch(error => {
            console.error(error);
          });
      } else {
        alert("enter Password!!");
      }
    } else {
      alert("enter neme!!!!");
    }
    if (localStorage.getItem("myCat")) {
      this.setState({
        re: true
      });
    }
  }

  render() {
    if (this.state.typeUser == "user") {
      localStorage.setItem("myCat", "Abhishek");
      // return <Redirect to="/admin" />;
      //  return <Redirect to="/emp" />;
      return <Redirect to="/user" />;
    }
    if (this.state.typeUser == "employee") {
      localStorage.setItem("myCat", "emp");
      return <Redirect to="/emp" />;
    }
    if (this.state.typeUser == "admin") {
      localStorage.setItem("myCat", "admin");
      return <Redirect to="/admin" />;
    }

    return (
      <div>
        <Nav userSession={this.state.userSession} />

        <div
          className="mt-1 "
          style={{
            width: "100%",
            marginLeft: "0%",
            minHeight: "630px",
            backgroundColor: "black"
          }}
        >
          <br />
          <br />
          <div
            className="card  mb-3 shadow "
            style={{ minWidth: "300px", maxWidth: "25%", margin: "50px auto" }}
          >
            <div className="card text-white " style={{ maxWidth: "100%" }}>
              <div className="card-body bg-white shadow-sm">
                <br />
                <h2 className="card-title text-center text-danger ">Login</h2>
                <br />

                <div className="form-group ">
                  {/* <label for="exampleInputEmail1">Email address</label> */}
                  <input
                    type="email"
                    className="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    placeholder="Enter email"
                    onChange={event => {
                      this.setState({
                        name: event.target.value
                      });
                    }}
                  />
                  <span className="badge badge-danger">{this.state.msg}</span>
                </div>
                <div className="form-group">
                  {/* <label for="exampleInputPassword1">Password</label> */}
                  <input
                    type="password"
                    className="form-control"
                    id="exampleInputPassword1"
                    placeholder="Password"
                    onChange={event => {
                      this.setState({
                        password: event.target.value
                      });
                    }}
                  />
                  <span className="badge badge-danger">{this.state.msg}</span>
                </div>
                <center>
                  <button
                    type="submit"
                    className="btn btn-primary text-center mt-4 shadow"
                    style={{ width: "100%" }}
                    onClick={this.login.bind(this)}
                  >
                    Login
                  </button>
                </center>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
