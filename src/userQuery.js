import React, { Component } from "react";
import Nav from "./navbar";
import "./template/css/prac.css"
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
      company: "",
      query: "",
      userSession: false
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
      company: e.target.value,
      userSession: localStorage.getItem("myCat")
    });
  }
  formReset() {
    this.setState({
      company: "",
      query: "",
     
    });
  }
  handleTextArea(e) {
    this.setState({
      query: e.target.value
    });
  }
  querSubmit() {
    if (this.state.query === "" || this.state.query == null)
      alert("enter query!!!!");

    if (this.state.company === "" || this.state.company == null)
      alert("enter COMPANY!!!!");
    console.log("begin login");
    fetch("http://localhost:8000/addquery", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        user_email: this.state.user_email,
        query: this.state.query,
        company: this.state.company
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

  render() {
    return (
      <div > 
        {" "}
        <Nav userSession={this.state.userSession} />
        <div className="mt-1 " style={{width:"94%", marginLeft:"3%", minHeight:"600px"}}>
        <div
          className="card border-primary mb-3 shadow"
          style={{ minWidth: "330px", maxWidth: "25%" , margin:"50px auto" }}
        >
          <div className="card-header ">Header</div>
          <div className="card-body text-primary bg22" >
            <h5 className="card-title"> Select Query For :{this.state.company}</h5>
            {/* <p className="card-text">
              Someup the bulk of the card's content. {this.state.query}
            </p> */}

            <div className="custom-control custom-radio">
              <input
                type="radio"
                id="customRadio2"
                name="rd1"
                className="custom-control-input"
                value="Flipkart"
                onChange={this.handleRadio.bind(this)}
              />
              <label className="custom-control-label" for="customRadio2">
                Flipkart
              </label>
            </div>
            <div className="custom-control custom-radio">
              <input
                type="radio"
                id="customRadio3"
                name="rd1"
                className="custom-control-input"
                value="Amazon"
                onChange={this.handleRadio.bind(this)}
              />
              <label className="custom-control-label" for="customRadio3">
                Amazon
              </label>
            </div>
            <div className="custom-control custom-radio">
              <input
                type="radio"
                id="customRadio4"
                name="rd1"
                className="custom-control-input"
                value="Myntra"
                onChange={this.handleRadio.bind(this)}
              />
              <label className="custom-control-label" for="customRadio4">
                {" "}
                Myntra
              </label>
            </div>
            <div className="custom-control custom-radio">
              <input
                type="radio"
                id="customRadio5"
                name="rd1"
                className="custom-control-input"
                value="Other"
                onChange={this.handleRadio.bind(this)}
              />
              <label className="custom-control-label" for="customRadio5">
                Other
              </label>
            </div>
            <div className="form-group mt-2" style={{}}>
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
              className="ml-5 mt-3 btn btn-primary"
              querSubmit
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

          </div>
        </div>
        </div>
      </div>
    );
  }
}
