import React, { Component } from "react";
import "../template/vendor/bootstrap/css/bootstrap.min.css";
import "../template/fonts/iconic/css/material-design-iconic-font.min.css";
import "../template/css/util.css";
import "../template/css/main.css";
export default class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = { name: "" , password:"" , password:"",mobile_number:""};
  }
  handleInput=()=> {
      this.setState({

      })
  }
	
  handleInput=()=> {
    fetch("http://localhost:8000/signup", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        email: this.state.email,
        password: this.state.password,
        name: this.state.name,
        mobile_number:this.state.mobile_number
      })
    })
      .then(response => response.json())
      .then(responsejson => {
        if (responsejson.token) {
          this.setState({
            msg: "login succesfull",
            email: this.state.email,
            password: this.state.password,
            name: this.state.name,
            mobile_number:this.state.mobile_number
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

              <span className="login100-form-title p-b-34 p-t-27">Sign Up</span>

              <div className="wrap-input100 validate-input">
                <input
                  className="input100"
                  type="text"
                  name="name"
                  placeholder="Username"
                  
                />
                <span className="focus-input100" data-placeholder="&#xf207;" />
              </div>

              <div className="wrap-input100 validate-input">
                <input
                  className="input100"
                  type="text"
                  name="email"
                  placeholder="Email"
                  
                />
                <span className="focus-input100" data-placeholder="&#xf207;" />
              </div>
              <div className="wrap-input100 validate-input">
                <input
                  className="input100"
                  type="text"
                  name="mobile_number"
                  placeholder="Mobile Number"
                  
                />
                <span className="focus-input100" data-placeholder="&#xf207;" />
              </div>

              <div className="wrap-input100 validate-input">
                <input
                  className="input100"
                  type="password"
                  name="password"
                  placeholder="Password"
                />
                <span className="focus-input100" data-placeholder="&#xf191;" />
              </div>

              <div className="wrap-input100 validate-input">
                <input
                  className="input100"
                  type="password"
                  name="confirmPassword"
                  placeholder="Confirm Password"
                />
                <span className="focus-input100" data-placeholder="&#xf191;" />
              </div>

              <div className="container-login100-form-btn">
                <button className="login100-form-btn" onClick={this.handleInput}>Sign Up</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}
