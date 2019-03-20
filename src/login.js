import React, { Component } from "react";
import "./template/css/main.css";
import "./template/fonts/iconic/css/material-design-iconic-font.min.css";
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect
} from "react-router-dom";
import Nav from "./navbar";

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      password: "",
      re: false
    };
  }

  login() {
    if (this.state.name == "" || this.state.name == null) {
      alert("enter neme!!!!");
    } else {
      localStorage.setItem("myCat", "Abhishek");
      console.log("begin login");
      fetch("http://localhost:8000/login", {
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
    if (localStorage.getItem("myCat")) {
      this.setState({
        re: true
      });
    }
  }

  render() {
    if (this.state.re) {
      return <Redirect to="/admin" />;
      //return <Redirect to="/emp" />; 
      //return <Redirect to="/user" />; 
      
    }
    return (
      <div style={{ backgroundColor: "blue" }}>
        <Nav userSession={this.state.userSession} />

        <div className="limiter">
          <div class="container-login100">
            <div className="wrap-login100">
              <form>
                <span className="login100-form-logo">
                  <i className="zmdi zmdi-landscape" />
                </span>

                <span className="login100-form-title p-b-34 p-t-27">
                  Log in
                </span>

                <div className="wrap-input100 validate-input">
                  <input
                    className="input100"
                    type="text"
                    placeholder="Username"
                    onChange={event => {
                      this.setState({
                        name: event.target.value
                      });
                    }}
                  />
                  <span
                    className="focus-input100"
                    data-placeholder="&#xf207;"
                  />
                </div>

                <div className="wrap-input100 validate-input">
                  <input
                    className="input100"
                    type="password"
                    placeholder="Password"
                    onChange={event => {
                      this.setState({
                        password: event.target.value
                      });
                    }}
                  />
                  <span
                    className="focus-input100"
                    data-placeholder="&#xf191;"
                  />
                </div>

                <div className="container-login100-form-btn">
                  <button
                    className="login100-form-btn"
                    onClick={this.login.bind(this)}
                  >
                    Login
                  </button>
                </div>
              </form>
              <span class="badge badge-success">{this.state.msg}</span>
           
            </div>
          </div>
        </div>
      </div>
    );
  }
}
