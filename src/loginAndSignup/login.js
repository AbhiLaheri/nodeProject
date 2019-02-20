import React, { Component } from "react";
import "../template/vendor/bootstrap/css/bootstrap.min.css";
import "../template/fonts/iconic/css/material-design-iconic-font.min.css";
import "../template/css/util.css";
import "../template/css/main.css";
export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = { name: "" , password:""};
  }
  handleInput = e => {
    this.setState({
      name: e.target.value
    });
	};
	
  handleInput() {
    fetch("http://localhost:8000/log", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        email: this.state.name,
        password: "password"
      })
    })
      .then(response => response.json())
      .then(responsejson => {
        if (responsejson.token) {
          this.setState({
            msg: "login succesfull"
          });
        } else {
          this.setState({
            msg: "login unsuccesfull"
          });
        }
      });
  }
  render() {
    return (
      <div className="limiter">
        <div class="container-login100">
          <div className="wrap-login100">
            <form>
              <span className="login100-form-logo">
                <i className="zmdi zmdi-landscape" />
              </span>

              <span className="login100-form-title p-b-34 p-t-27">Log in</span>

              <div className="wrap-input100 validate-input">
                <input
                  className="input100"
                  type="text"
                  name="username"
                  placeholder="Username"
                  onChange={this.handleInput}
                />
                <span className="focus-input100" data-placeholder="&#xf207;" />
              </div>

              <div className="wrap-input100 validate-input">
                <input
                  className="input100"
                  type="password"
                  name="pass"
                  placeholder="Password"
                />
                <span className="focus-input100" data-placeholder="&#xf191;" />
              </div>

              <div className="container-login100-form-btn">
                <button className="login100-form-btn">{this.state.name}Login</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}
