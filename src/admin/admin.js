import React, { Component } from "react";
import AppNavbar from "../appNavBar";
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect
} from "react-router-dom";
import "../template/css/style.css";
import Nav from "../navbar";
export default class Admin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      msg: "",
      arr: [],
      empEmail: "",
      user: [],
      userMsg: "",
      userEmail: "",
      allocatMsg: "",
      subject: ""
    };
  }

  componentDidMount() {
    this.getEmployees();
  }

  getEmployees() {
    if (localStorage.getItem("myCat")) {
      this.setState({
        userSession: true
      });
    }

    if (localStorage.getItem("myCat")) {
      console.log("begin login");
      fetch("http://localhost:8000/availableEpmloyee", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          available: "true"
        })
      })
        .then(response => response.json())
        .then(responseJson => {
          console.log(responseJson);
          if (responseJson.status) {
            this.setState({
              msg: responseJson.message,
              arr: responseJson.result
            });
          } else {
            this.setState({
              arr: []
            });
          }
        })
        .catch(error => {
          console.error(error);
        });
    }
  }
  handleRadio(e) {
    this.setState({
      empEmail: e.target.value
    });
  }
  handleUserRadio(e) {
    this.setState({
      userEmail: e.target.value
    });
  }
  findUser(e) {
    console.log(e.target.value, "test");
    if (localStorage.getItem("myCat")) {
      console.log("begin login");
      fetch("http://localhost:8000/find_user_query", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          subject: e.target.value
        })
      })
        .then(response => response.json())
        .then(responseJson => {
          console.log(responseJson);

          if (responseJson.status) {
            this.setState({
              userMsg: responseJson.status,
              user: responseJson.result
            });
          } else {
            this.setState({
              userMsg: "",
              user: []
            });
          }
          this.setState({
            allocatMsg: ""
          });

          // this.setState({
          //   userMsg: responseJson.status,
          //   user: responseJson.result
          // });
        })
        .catch(error => {
          console.error(error);
        });
    }
  }

  allocateQuery() {
    console.log("test3");
    if (
      localStorage.getItem("myCat") &&
      this.state.userEmail &&
      this.state.empEmail
    ) {
     
      console.log("begin login");
      fetch("http://localhost:8000/admin_assign_work", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          user_email: this.state.userEmail,
          emp_email: this.state.empEmail
        })
      })
        .then(response => response.json())
        .then(responseJson => {
          console.log(responseJson);
          this.setState({
            allocatMsg: responseJson.message,
            user: []
          });
          this.getEmployees();
        })
        .catch(error => {
          console.error(error);
        });
    } else {
      this.setState({
        allocatMsg: "plz Select All"
      });
    }
  }

  render() {
    if ( !localStorage.getItem("myCat")) {
     
      return <Redirect to="/login1" />;
    }
    return (
      <div
        className="shadow-sm "
        style={{
          backgroundColor: "white",
          minHeight:"650px",
          paddingBottom: "130px"
        }}
      >
        <Nav userSession={this.state.userSession} />
        <div className="admin-body">
          <div className="row " >
            <div className="col-sm-3 ">
              <div className="card shadow-sm">
                <div className="card-body bg-primary shadow-sm ">
                  <h5 className="card-title ">All Subject</h5>
                </div>
                <ul className="list-group list-group-flush  ">
                  <li className="list-group-item list-modss ">
                    <input
                      type="radio"
                      name="cm1"
                      value="Node"
                      onChange={this.findUser.bind(this)}
                    />
                   {"  "} Node
                  </li>
                  <li className="list-group-item list-modss">
                    <input
                      type="radio"
                      name="cm1"
                      value="React"
                      onChange={this.findUser.bind(this)}
                    />
                    {"  "} React
                  </li>
                  <li className="list-group-item list-modss">
                    <input
                      type="radio"
                      name="cm1"
                      value="Angular"
                      onChange={this.findUser.bind(this)}
                    />
                    {"  "} Angular
                  </li>
                  <li className="list-group-item list-modss">
                    <input
                      type="radio"
                      name="cm1"
                      value="Django"
                      onChange={this.findUser.bind(this)}
                    />
                    {"  "} Django
                  </li>
                  <li className="list-group-item list-modss">
                    <input
                      type="radio"
                      name="cm1"
                      value="Other"
                      onChange={this.findUser.bind(this)}
                    />
                    {"  "} Other
                  </li>

                  <button
                    className="btn btn-primary"
                    onClick={this.allocateQuery.bind(this)}
                  >
                    Allocate Query
                  </button>
                </ul>

              </div> {(this.state.allocatMsg=="plz Select All")?<span className="badge badge-danger">{this.state.allocatMsg}</span>:<span className="badge badge-success">{this.state.allocatMsg}</span>}  
            </div>
            <div className="col-sm-4  " style={{marginLeft: -20}}>
              <div className="card ">
                <div className="card-body bg-primary ">
                  <h5 className="card-title ">All available Employee </h5>
                </div>
                <ul className="list-group list-group-flush">
                  {this.state.arr.map(single => (
                    <li className="list-group-item list-modss">
                      {" "}
                      <input
                        type="radio"
                        name="em1"
                        value={single.emp_email}
                        onChange={this.handleRadio.bind(this)}
                      />
                     {"  "}  {single.emp_email}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="col-sm-4  " style={{marginLeft: -20}}>
              <div className="card ">
                <div className="card-body bg-primary ">
                  <h5 className="card-title ">All User Token: </h5>
                </div>
                <ul className="list-group list-group-flush ">
                  {this.state.user.map(single => (
                    <li className="list-group-item list-modss">
                      {" "}
                      <input
                        type="radio"
                        name="us1"
                        value={single._id}
                        onChange={this.handleUserRadio.bind(this)}
                      />
                     {"  "}  {single.user_email} 
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
        
      </div>
    );
  }
}
