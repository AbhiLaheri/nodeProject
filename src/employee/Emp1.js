import React, { Component } from "react";
import AppNavbar from "../appNavBar";
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect
} from "react-router-dom";
import Nav from "../navbar";
//import "./template/css/style.css";
//import { Button, Form, Col } from 'react-bootstrap';
import "../template/css/prac.css";
export default class Emp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userSession: false,
      userDetails: "",
      user_email: "",
      query: "",
      emp_email: "",
      noQuery: "",
      notSolve: "",
      answer:""
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
          console.log("bus", responseJson);
          localStorage.setItem("userQueerId",responseJson.result)
          this.setState({
            msg: responseJson.message,
            user_email: responseJson.result,
            emp_email: localStorage.getItem("email_token"),
            notSolve: "Proceesing"
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
      if (this.state.query == "") {
        this.setState({
          query: "query not found"
        });
      }
    } else {
      if (this.state.noQuery == "") {
        this.setState({
          noQuery: "query not found"
        });
      }
    }
  }
  solveBtn() {
    if (this.state.user_email != "" && this.state.answer !=="") {
      console.log("start solve query");
      fetch("http://localhost:8000/emp_solve_user_query", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          user_email: this.state.user_email,
          emp_email: this.state.emp_email,
          answer: this.state.answer
        })
      })
        .then(response => response.json())
        .then(responseJson => {
          console.log(responseJson);
          this.setState({
            query: "",
            user_email: "",
            notSolve: ""
          });
        })
        .catch(error => {
          console.error(error);
        });
    }
    else{
      alert("Enter Answer!!!! ")
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
            user_email: "",
            query: "",
            notSolve: "",
            answer: ""
          });
        })
        .catch(error => {
          console.error(error);
        });
    }
    else{
      alert("error");
    }
  }
  handleTextAreas(e) {
    this.setState({
      answer: e.target.value
    });
  }

  render() {
    if (!localStorage.getItem("myCat")) {

      return <Redirect to="/login1" />;
    }
    return (
      <div>
        <Nav userSession={this.state.userSession} />

        <div
          className=" "
          style={{
            marginLeft: "8%",

          }}
        >
          <div
            className="row  "
            style={{ minHeight: "600px", marginTop: "40px" }}
          >
            <div className="col-sm-3 " style={{ marginLeft: " -10px" }}>
              <div className="card " >
                <div className="card-body bg-primary  text-white" style={{ height: "60px" }}>
                  <h5 className="card-title  ">DashBoard </h5>
                </div>
                <ul className="list-group list-group-flush">
                  <li className="list-group-item  ">
                    welcome {this.state.userDetails}
                  </li>
                  <li className="list-group-item  ">
                    Email: {localStorage.getItem("email_token")}
                  </li>
                </ul>
              </div>

              <div className="card mb-4" style={{ marginTop: "36px" }}>
                <div className="card-body bg-primary  text-white" style={{ height: "60px" }}>
                  <h5 className="card-title  ">User Details </h5>
                </div>
                <ul className="list-group list-group-flush">
                  <li className="list-group-item  ">
                    Query Id: {this.state.user_email}
                  </li>
                  <li className="list-group-item  ">
                    Status: {this.state.user_email != "" ? this.state.notSolve : ""}
                  </li>
                  <li className="list-group">
                    <button
                      type="submit"
                      className="btn btn-primary   shadow"
                      style={{ width: "100%" }}
                      onClick={this.showQuery.bind(this)}
                    >
                      Show User Query
                    </button>
                  </li>
                </ul>
              </div>
            </div>

            {/* <div className="col-sm-3 mb-4 " style={{marginLeft:" -10px"}}>
              <Email />
            </div> */}

            <div
              className="row"
              style={{ width: "75%", marginLeft:-20 }}
            >

              <div className="col-sm-11  " >
                <div className="card shadow-sm">
                  <div className="card-body bg-primary  text-white " style={{ height: "60px" }}>
                    <h5 className="card-title ">User Query </h5>
                  </div>
                  <ul className="list-group list-group-flush">
                    <li className="list-group-item">
                      {this.state.query}

                      <span className="badge badge-danger ml-2">
                        {this.state.noQuery}
                      </span>
                      {this.state.query !== "" ? (
                      <textarea class="form-control border-primary " style={{ width: "100%", marginTop: "7px", height:100 }} placeholder="Reply" onChange={this.handleTextAreas.bind(this)}
                      value={this.state.answer}></textarea> ):""}
                      <div className="text-center mt-3">
                        {this.state.query == "" ? (
                          ""
                        ) : (
                            <button type="button" class="btn btn-outline-primary pl-4 pr-4" onClick={this.solveBtn.bind(this)}>Solve</button>

                          )}
                        {this.state.query == "" ? (
                          ""
                        ) : (
                            <button type="button" class="btn btn-outline-danger ml-3" onClick={this.reAssignBtn.bind(this)}> Re Assign</button>
                          )}
                      </div>
                    </li>
                  </ul>
                </div>

              </div>
              {/* <div class="col-sm-5" style={{ marginLeft: "-17px" }}>
                <Email></Email>
              </div> */}

            </div>


          </div>
        </div>
      </div >
    );
  }
}
