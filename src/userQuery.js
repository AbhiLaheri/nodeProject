import React, { Component } from "react";
import Nav from "./navbar";
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
      <div style={{backgroundColor:"#f5f4fc"}}> 
        {" "}
        <Nav userSession={this.state.userSession} />
        <div className="card mt-1 shadow-sm" style={{width:"94%", marginLeft:"3%", minHeight:"600px", backgroundColor:"#f5f4fc"}}>
        <div
          class="card border-primary mb-3 shadow"
          style={{ minWidth: "330px", maxWidth: "30%" , margin:"50px auto" }}
        >
          <div class="card-header ">Header</div>
          <div class="card-body text-primary bg-dark" >
            <h5 class="card-title"> Select Query For :{this.state.company}</h5>
            {/* <p class="card-text">
              Someup the bulk of the card's content. {this.state.query}
            </p> */}

            <div class="custom-control custom-radio">
              <input
                type="radio"
                id="customRadio2"
                name="rd1"
                class="custom-control-input"
                value="Flipkart"
                onChange={this.handleRadio.bind(this)}
              />
              <label class="custom-control-label" for="customRadio2">
                Flipkart
              </label>
            </div>
            <div class="custom-control custom-radio">
              <input
                type="radio"
                id="customRadio3"
                name="rd1"
                class="custom-control-input"
                value="Amazone"
                onChange={this.handleRadio.bind(this)}
              />
              <label class="custom-control-label" for="customRadio3">
                Amazon
              </label>
            </div>
            <div class="custom-control custom-radio">
              <input
                type="radio"
                id="customRadio4"
                name="rd1"
                class="custom-control-input"
                value="Myntra"
                onChange={this.handleRadio.bind(this)}
              />
              <label class="custom-control-label" for="customRadio4">
                {" "}
                Myntra
              </label>
            </div>
            <div class="custom-control custom-radio">
              <input
                type="radio"
                id="customRadio5"
                name="rd1"
                class="custom-control-input"
                value="Other"
                onChange={this.handleRadio.bind(this)}
              />
              <label class="custom-control-label" for="customRadio5">
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
