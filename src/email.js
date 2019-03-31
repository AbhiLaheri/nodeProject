import React, { Component } from "react";

import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect
} from "react-router-dom";
import Nav from "./navbar";

export default class Email extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user_email: "",
      subject: "",
      replyMessage: "",
      msg: ""
    };
  }

  emailBtn() {
    if (
      this.state.replyMessage != "" &&
      this.state.subject != "" &&
      this.state.user_email != ""
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
          user_email: this.state.user_email,
          replyMessage: this.state.replyMessage
        })
      })
        .then(response => response.json())
        .then(responseJson => {
          console.log(responseJson.status);
          this.setState({
            msg: responseJson.message
          });
          if (responseJson.status) {
            this.setState({
              msg: "email Send ",
              user_email: "",
              subject: "",
              replyMessage: ""
            });
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
    return (
      <div>
        <div className="row  ">
          <div className="col-sm-12 ">
            <div className="card shadow-sm">
              <div
                className="card-body bg-primary shadow-sm "
                style={{ height: "60px" }}
              >
                <h5 className="card-title text-white">Resolve Query</h5>
              </div>
              <span className="badge badge-success">{this.state.msg}</span>
              <center>
                <div className="form-group mt-4">
                  <input
                    type="text"
                    className="form-control"
                    style={{ width: "93%" }}
                    placeholder="To"
                    value={this.state.user_email}
                    onChange={event => {
                      this.setState({
                        user_email: event.target.value
                      });
                    }}
                  />
                </div>
                <div className="form-group ">
                  <input
                    type="text"
                    className="form-control"
                    style={{ width: "93%" }}
                    aria-describedby="emailHelp"
                    value={this.state.subject}
                    placeholder="Subject"
                    onChange={event => {
                      this.setState({
                        subject: event.target.value
                      });
                    }}
                  />
                </div>
                <div className="form-group">
                  <textarea
                    className="form-control"
                    rows="5"
                    placeholder="Message"
                    id="s"
                    value={this.state.replyMessage}
                    style={{ width: "93%", height: "120px" }}
                    onChange={event => {
                      this.setState({
                        replyMessage: event.target.value
                      });
                    }}
                  />
                </div>
              </center>

              <button
                type="submit"
                className="btn btn-primary text-center mt-4 shadow"
                style={{ width: "100%" }}
                onClick={this.emailBtn.bind(this)}
              >
                Send
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
