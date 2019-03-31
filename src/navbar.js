import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "./template/css/prac.css";

export default class Nav extends Component {
  userLogOut() {
    localStorage.removeItem("email_token");
    localStorage.removeItem("type");
    this.setState({
      userSession: localStorage.removeItem("myCat")
    });
  }

  render() {
    console.log(this.props.userSession);
    return (
      <nav
        className="navbar navbar-expand-lg navbar-light shadow "
        style={{ backgroundColor: "white" }}
      >
        <Link
          to="/"
          className="navbar-brand lk"
          style={{ color: "blue", fontSize: 27 }}
        >
          Query Solver
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <Link
              to="/"
              className="nav-item nav-link lkk"
              style={{ color: "black" }}
            >
              Home <span className="sr-only">(current)</span>
            </Link>
   {/* start nested if */}
            {localStorage.getItem("type") == "employee" ? (
              <Link
                to="/emp"
                className="nav-item nav-link"
                style={{ color: "black" }}
              >
                DashBoard
              </Link>
            ) : localStorage.getItem("type") == "user" ? (
              <Link
                to="/user"
                className="nav-item nav-link"
                style={{ color: "black" }}
              >
                DashBoard
              </Link>
            ) : localStorage.getItem("type") == "admin" ? (
              <Link
                to="/admin"
                className="nav-item nav-link"
                style={{ color: "black" }}
              >
                DashBoard
              </Link>
            ) : (
              <a
                href="#about"
                className=" nav-item nav-link"
                style={{ color: "black" }}
              >
                AboutUs
              </a>
            )}
    {/* End nested if */}

            {!this.props.userSession ? (
              <Link
                to="/signup"
                className="nav-item nav-link"
                style={{ color: "black" }}
              >
                SignUp
              </Link>
            ) : (
              ""
            )}
            {!this.props.userSession ? (
              <Link
                to="/login1"
                className="nav-item nav-link"
                style={{ color: "black" }}
              >
                Login
              </Link>
            ) : (
              <Link
                to="/"
                className="nav-item nav-link"
                style={{ color: "black" }}
                onClick={this.userLogOut}
              >
                LogOut
              </Link>
            )}
            <span className="nav-item nav-link" style={{ color: "black" }}>
              {localStorage.getItem("myCat")}
            </span>
          </div>
        </div>
      </nav>
    );
  }
}
