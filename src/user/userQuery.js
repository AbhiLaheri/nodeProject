import React, { Component } from "react";
import Nav from "../navbar";
import "../template/css/prac.css";
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect
} from "react-router-dom";
//import AppNavbar from './appNavBar';
export default class UserQuery extends Component {
  constructor(props) {
    super(props);
    this.state = {
      subject: "",
      query: "",
      userSession: false,
      msg: "",
    };
  }

  componentDidMount() {
    if (localStorage.getItem("myCat")) {
      this.setState({
        userSession: true
      });
    }
  }
  handleRadio(e) {
    this.setState({
      subject: e.target.value,
      userSession: localStorage.getItem("myCat"),
    });
  }
  formReset() {
    this.setState({
      subject: "",
      query: "",
      msg:"",
      rd1:"",
      nodeRadio: false
    });
  }
  handleTextArea(e) {
    this.setState({
      query: e.target.value
    });
  }
  querSubmit() {
    if (this.state.query != "" ) {
      if (this.state.subject != "" ) {
        console.log("begin login");
        fetch("http://localhost:8000/add_user_query", {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            user_email: localStorage.getItem("email_token"),
            query: this.state.query,
            subject: this.state.subject
          })
        })
          .then(response => response.json())
          .then(responseJson => {
           if(responseJson.status){
            this.setState({
              query:"",
              subject:""
            });
           }
            this.setState({
              msg: responseJson.message
            });
          })
          .catch(error => {
            console.error(error);
          });
      } else {
        alert("enter subject!!!!");
      }
    } else {
      alert("enter query!!!!");
    }
  }

  render() {
    if ( !localStorage.getItem("myCat")) {
     
      return <Redirect to="/login1" />;
    }
    return (
      <div>
        <Nav userSession={this.state.userSession} />
        <div
          className="mt-1 "
          style={{ width: "94%", marginLeft: "3%", minHeight: "600px" }}
        >
          <div
            className="card border-primary mb-3 shadow"
            style={{ minWidth: "340px", maxWidth: "25%", margin: "50px auto" }}
          >
            <div className="card-header bg23 text-white text-center ">Submit Your Query </div>
            <div className="card-body text-primary bg22">
              <h5 className="card-title">
                {" "}
                Select Query For :{"  "}
                {this.state.subject}
              </h5>
              {/* <p className="card-text">
              Someup the bulk of the card's content. {this.state.query}
            </p> */}

              <div className="custom-control custom-radio">
                <input
                  type="radio"
                  id="customRadio2"
                  name="rd1"
                  className="custom-control-input"
                  value="Node"
                
                  onChange={this.handleRadio.bind(this)}
                />
                <label className="custom-control-label text-white" for="customRadio2">
                Node
                </label>
              </div>
              <div className="custom-control custom-radio">
                <input
                  type="radio"
                  id="customRadio3"
                  name="rd1"
                  className="custom-control-input"
                  value="React"
                
                  onChange={this.handleRadio.bind(this)}
                />
                <label className="custom-control-label text-white" for="customRadio3">
                React
                </label>
              </div>
              <div className="custom-control custom-radio">
                <input
                  type="radio"
                  id="customRadio4"
                  name="rd1"
                
                  className="custom-control-input "
                  value="Angular"
                  onChange={this.handleRadio.bind(this)}
                />
                <label className="custom-control-label text-white" for="customRadio4">
                  {" "}
                  Angular
                </label>
              </div>
              <div className="custom-control custom-radio">
                <input
                  type="radio"
                  id="customRadio5"
                  name="rd1"
                  className="custom-control-input"
                  value="Django"
                
                  onChange={this.handleRadio.bind(this)}
                />
                <label className="custom-control-label text-white" for="customRadio5">
                  Django
                </label>
              </div>
              <div className="custom-control custom-radio">
                <input
                  type="radio"
                  id="customRadio6"
                  name="rd1"
                  className="custom-control-input"
                
                  value="Other"
                  onChange={this.handleRadio.bind(this)}
                />
                <label className="custom-control-label text-white" for="customRadio6">
                  Other
                </label>
              </div>
              <div className="form-group mt-2" >
                <label for="comment">Write Your Query Here :</label>
                <textarea
                  className="form-control mt-2"
                  style={{ width: "100%", height: "100px" }}
                  onChange={this.handleTextArea.bind(this)}
                  value={this.state.query}
                >
                  {" "}
                </textarea>
              </div>

              <button
                className=" mt-3 btn btn-primary"
                style={{marginLeft:"20%"}}
                onClick={this.querSubmit.bind(this)}
              >
                Submit
              </button>
              <button
                className="ml-4  mt-3 pl-3 pr-3 btn btn-primary"
                onClick={this.formReset.bind(this)}
              >
                Reset
              </button>
              <br/>
              <span className="badge badge-success text-center mt-4 " style={{marginLeft:"20%"}}>{this.state.msg}</span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
