import React, { Component } from "react";
import moment from 'moment';
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
export default class UserAllQuery extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userSession: false,
            userDetails: "",
            user_email: "",
            allUserQuery: []
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
            fetch("http://localhost:8000/user_find_query", {
                method: "POST",
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    user_email: localStorage.getItem("email_token")
                })
            })
                .then(response => response.json())
                .then(responseJson => {
                    console.log("query details", responseJson.result);
                    this.setState({
                        msg: responseJson.message,
                        user_email: localStorage.getItem("email_token"),
                        allUserQuery: responseJson.result
                    });
                })
                .catch(error => {
                    console.error(error);
                });
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
                        marginLeft: "10%",
                        marginRight: "2%",
                        marginTop: "4%",
                        alignSelf: "1px auto"
                    }}
                >
                    <div
                        className="row  "
                        style={{ minHeight: "600px", marginTop: "60px" }}
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

                        </div>


                        <div className="col-sm-8  " style={{ marginLeft: " -10px" }}>
                            <div className="card ">
                                <div className="card-body bg-primary  text-white " style={{ height: "60px" }}>
                                    <h5 className="card-title ">Your All Query </h5>
                                </div>
                                <ul className="list-group list-group-flush">
                                    {this.state.allUserQuery.map(que => (
                                        <li className="list-group-item ">
                                            <div className="card border-primary shadow-sm" style={{ width: "100%" }}>
                                                <div className="card-body">
                                                    <h5 className="card-title text-primary">Subject: {que.subject}</h5>
                                                    <h6 className="card-subtitle mb-2 text-muted">Date:  {moment(que.date).format("YYYY-MM-DD")} </h6>
                                                    <h6 className="card-subtitle mb-2 text-muted">Status: {que.status == "Solve" ? <span className="badge badge-success ml-2">
                                                        {que.status}
                                                    </span> : <span className="badge badge-danger ml-2">
                                                            {que.status}
                                                        </span>} </h6>

                                                    <p className="card-text"><b>Query: </b>{que.query}</p>
                                                    <p className="card-text" style={{ marginTop: "-30px" }}><b>Answer:</b>{que.answer} </p>

                                                </div>
                                            </div>
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
