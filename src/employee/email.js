import React, { Component } from "react";

import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect
} from "react-router-dom";
import Nav from "../navbar";

export default class Email extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user_email: "",
      subject: "",
      replyMessage: "",
      msg: "",
      userSession: false
    };
  }
  componentDidMount(){
    localStorage.getItem("userQueerId")
    if (localStorage.getItem("myCat")) {
      this.setState({
        userSession: true,
      });
  }
}

  emailBtn() {
    if (
      this.state.replyMessage != "" &&
      this.state.subject != "" 
    ) {
      console.log("EMAIL ");
      fetch("http://localhost:8000/email", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          subject: this.state.subject,
          user_email: localStorage.getItem("userQueerId"),
          replyMessage: this.state.replyMessage
        })
      })
        .then(response => response.json())
        .then(responseJson => {
          console.log(responseJson.status);
        
          this.setState({
            msg: responseJson.message,
            subject: "",
            replyMessage: ""
          });

          if (responseJson.status) {
            this.setState({
              msg: "email Send ",
              user_email: "",
              subject: "",
              replyMessage: ""
            });
            localStorage.setItem("userQueerId","")
          }
        })
        .catch(error => {
          console.error(error);
        });
    } else {
      alert("enter All!!!!");
    }
  }

  render() {
    if (!localStorage.getItem("myCat")) {

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
            style={{ minWidth: "300px", maxWidth: "25%", margin: "30px auto" }}
          >
            <div className="card text-white " style={{ maxWidth: "100%" }}>
              <div className="card-body bg-white shadow-sm">
                <br />
                <h3 className="card-title text-center  "style={{fontFamily:"Verdana", color:"blue"}}>Send Email To The User </h3>
                <br />

                <div className="form-group ">
                  {/* <label for="exampleInputEmail1">Email address</label> */}
                  <input
                    type="email"
                    className="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    disabled
                    placeholder="To"
                    value={localStorage.getItem("userQueerId")}
                  />
                  {/* <span className="badge badge-danger">{this.state.msg}</span> */}
                </div>

                <div className="form-group ">
                  {/* <label for="exampleInputEmail1">Email address</label> */}
                  <input
                    type="text"
                    className="form-control"
                    aria-describedby="emailHelp"
                    value={this.state.subject}
                    placeholder="Subject"
                    onChange={event => {
                      this.setState({
                        subject: event.target.value
                      });
                    }}
                  />
                  {/* <span className="badge badge-danger">{this.state.msg}</span> */}
                </div>
                <div className="form-group">
                  <textarea
                    className="form-control"
                   
                    placeholder="Message"
                    id="s"
                    value={this.state.replyMessage}
                    style={{  height: "120px" }}
                    onChange={event => {
                      this.setState({
                        replyMessage: event.target.value
                      });
                    }}
                  />
                </div>

              
                <center>
                  <button
                    type="submit"
                    className="btn btn-primary text-center mt-4 shadow"
                    style={{ width: "100%" }}
                    onClick={this.emailBtn.bind(this)}
                  >
                    Send Email
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
