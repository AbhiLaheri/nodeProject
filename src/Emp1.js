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
      userSession: false,
      userDetails: "",
      user_email: "",
      query: "",
      emp_email:"",
      noQuery:""
    };
  }
  componentDidMount() {
    if (localStorage.getItem("myCat")) {
      this.setState({
        userSession: true,
        userDetails: localStorage.getItem("myCat")
      });
    }
    console.log("token", localStorage.getItem("email_token"));
    if (localStorage.getItem("myCat")) {
      // localStorage.setItem("myCat", "Abhishek");
      console.log("begin login");
      fetch("http://localhost:8000/emp_check_assigned_work", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          emp_email: localStorage.getItem("email_token")
        })
      })
        .then(response => response.json())
        .then(responseJson => {
          console.log(responseJson.result);
          this.setState({
            msg: responseJson.message,
            user_email: responseJson.result,
            emp_email: localStorage.getItem("email_token")
          });
        })
        .catch(error => {
          console.error(error);
        });
    }
  }
  showQuery() {
    if (this.state.emp_email != "" && this.state.user_email != "") {
      // localStorage.setItem("myCat", "Abhishek");
      console.log("start find query");
      fetch("http://localhost:8000/emp_find_user_query", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          user_email: this.state.user_email
        })
      })
        .then(response => response.json())
        .then(responseJson => {
          console.log(responseJson.result[0].query);
          this.setState({
            query: responseJson.result[0].query
          });
        })
        .catch(error => {
          console.error(error);
        });
        if(this.state.query ==""){
          this.setState({
            query:"query not found"
          })
        }
    }
    else{
      if(this.state.noQuery ==""){
        this.setState({
          noQuery:"query not found"
        })
      }
    }
  }
  solveBtn(){
    if (this.state.user_email != "") {
      
      console.log("start solve query");
      fetch("http://localhost:8000/emp_solve_user_query", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          user_email: this.state.user_email,
          emp_email: this.state.emp_email
        })
      })
        .then(response => response.json())
        .then(responseJson => {
          console.log(responseJson);
          this.setState({
           query:"",
           user_email:""
          });
        })
        .catch(error => {
          console.error(error);
        });
    }
  }
  reAssignBtn() {
    if (this.state.emp_email != "" && this.state.user_email != "") {
     
      console.log("start reassign");
      fetch("http://localhost:8000/emp_reassion_user_query", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          user_email: this.state.user_email,
          emp_email: this.state.emp_email
        })
      })
        .then(response => response.json())
        .then(responseJson => {
          console.log(responseJson);
          this.setState({
            user_email:"",
            query:""
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
            marginTop: "4%",
            alignSelf: "1px auto"
          }}
        >
          <div
            className="row  "
            style={{ minHeight: "600px", marginTop: "50px" }}
          >
            <div className="col-sm-3  ">
              <div className="card ">
                <div className="card-body bg-primary ">
                  <h5 className="card-title text-center">Employee Details </h5>
                </div>
                <ul className="list-group list-group-flush">
                  <li className="list-group-item text-center">
                    welcome {this.state.userDetails}
                  </li>
                  <li className="list-group-item text-center">
                    Email: {localStorage.getItem("email_token")}
                  </li>
                </ul>
              </div>

              <div className="card mt-4">
                <div className="card-body bg-primary ">
                  <h5 className="card-title text-center">User Details </h5>
                </div>
                <ul className="list-group list-group-flush">
                  <li className="list-group-item text-center">
                    Email: {this.state.user_email}
                  </li>
                  <li className="list-group">
                    <button
                      type="submit"
                      className="btn btn-primary text-center shadow"
                      style={{ width: "100%" }}
                      onClick={this.showQuery.bind(this)}
                    >
                      Show User Query
                    </button>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-sm-8  ">
              <div className="card ">
                <div className="card-body bg-primary ">
                  <h5 className="card-title ">User Query </h5>
                </div>
                <ul className="list-group list-group-flush">
                  <li className="list-group-item">
                    {this.state.query}{" "}
        {this.state.query== ""?"": <span className="badge btn badge-success  ml-3 "  onClick={this.solveBtn.bind(this)}> Solve</span>} 
        {this.state.query== ""?"": <span className="badge btn badge-danger ml-2"  onClick={this.reAssignBtn.bind(this)}> Re Assign</span>} 
           { <span className="badge badge-danger ml-2" >{this.state.noQuery}</span>}       
                  </li>
                  {/* <li className="list-group-item">
                    {" "}
                    <button
                      type="submit"
                      className="btn btn-primary text-center shadow ml-1"
                      style={{ width: "47%" }}
                    >
                      solve
                    </button>{" "}
                    <button
                      type="submit"
                      className="btn btn-primary text-center shadow ml-4"
                      style={{ width: "47%" }}
                    >
                      Reassion
                    </button>{" "}
                  </li> */}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
