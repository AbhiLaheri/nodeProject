import React, { Component } from "react";

import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect
} from "react-router-dom";
import Nav from "./navbar";

export default class SignUp1 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      password: "",
      msg: "",
      user_email:"",
      phone_number: "",
      Confirm_Password:"h",
      redirectToLogin:false
     
    };
  }

  signup() {
    if (this.state.name != "" && this.state.phone_number != "" && this.state.user_email != "") {
      if (this.state.password != "" && this.state.password==this.state.Confirm_Password) {
        console.log("begin login");
        fetch("http://localhost:8000/signUp", {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            name: this.state.name,
            user_email: this.state.user_email,
            phone_number: this.state.phone_number,
            password: this.state.password
          })
        })
          .then(response => response.json())
          .then(responseJson => {
            console.log(responseJson.status);
            this.setState({
                msg:responseJson.message,
               
              });
            if(responseJson.status){
                this.setState({
                    redirectToLogin: true,
                   
                  });
            }
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
    // if (localStorage.getItem("myCat")) {
    //   this.setState({
    //     re: true
    //   });
    // }
  }

  render() {
    if (this.state.redirectToLogin) {
      return <Redirect to="/login1" />;
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
            backgroundColor: "#1b1b1c"
          }}
        >
         
          <br />
          <div
            className="card  mb-3 shadow "
            style={{ minWidth: "300px", maxWidth: "25%", margin: "50px auto" }}
          >
            <div className="card text-white " style={{ maxWidth: "100%" }}>
              <div className="card-body bg-white shadow-sm">
                <br />
                <h2 className="card-title text-center text-danger ">SignUp</h2>
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
                        user_email: event.target.value
                      });
                    }}
                  />
                  {/* <span className="badge badge-danger">{this.state.msg}</span> */}
                </div>

                <div className="form-group ">
                  {/* <label for="exampleInputEmail1">Email address</label> */}
                  <input
                    type="text"
                    className="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    placeholder="Name"
                    onChange={event => {
                      this.setState({
                        name: event.target.value
                      });
                    }}
                  />
                  {/* <span className="badge badge-danger">{this.state.msg}</span> */}
                </div>

                <div className="form-group ">
                  {/* <label for="exampleInputEmail1">Email address</label> */}
                  <input
                    type="text"
                    className="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    placeholder="Phone Number"
                    onChange={event => {
                      this.setState({
                        phone_number: event.target.value
                      });
                    }}
                  />
                  {/* <span className="badge badge-danger">{this.state.msg}</span> */}
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
                  {/* <span className="badge badge-danger">{this.state.msg}</span> */}
                </div>


                <div className="form-group">
                  {/* <label for="exampleInputPassword1">Password</label> */}
                  <input
                    type="password"
                    className="form-control"
                    id="exampleInputPassword1"
                    placeholder="Confirm Password"
                    onChange={event => {
                      this.setState({
                        Confirm_Password: event.target.value
                      });
                    }}
                  />
                  {this.state.password==this.state.Confirm_Password?<span className="badge badge-success">password match</span>:""}
                </div>

                <center>
                  <button
                    type="submit"
                    className="btn btn-primary text-center mt-4 shadow"
                    style={{ width: "100%" }}
                    onClick={this.signup.bind(this)}
                  >
                    SignUp
                  </button>
                     <span className="badge badge-success">{this.state.msg}</span>
                </center>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
