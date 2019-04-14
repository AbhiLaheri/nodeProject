import React, { Component } from "react";
import { Bar } from "react-chartjs-2";
import Nav from "../navbar";
import {
    BrowserRouter as Router,
    Route,
    Link,
    Redirect
  } from "react-router-dom";

export default class Barraph extends Component {
  constructor(props) {
    super(props);
    this.state = {
        goto:false,
        userSession: false,
      Data: {
        labels: [],
        datasets: [
          {
            label: "",
            data: [],
            backgroundColor: []
          }
        ]
      }
    };
  }
  componentDidMount() {
    if (localStorage.getItem("myCat")) {
        this.setState({
          userSession: true,
        });
    }
    fetch("http://localhost:8000/analyse_data", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({})
    })
      .then(response => response.json())
      .then(responsejson => {
        console.log("test", responsejson);

        this.setState({
          Data: {
            labels: responsejson.subject,
            datasets: [
              {
                label: "query solver data analysis",
                data: responsejson.count,
                backgroundColor: [
                  "rgba(255,105,145,0.6)",
                  "rgba(155,100,210,0.6)",
                  "rgba(90,178,255,0.6)",
                  "rgba(240,134,67,0.6)",
                  "rgba(240,134,69,0.2)"
                ]
              }
            ]
          }
        });
        console.log("so", this.state.Data);
      });
  }
  redirectTo(){
      this.setState({
          goto:true
      })
  }

  render() {
      if(this.state.goto){
        
            return <Redirect to="./pieGraph"/>
    
      }
    return (
      <div>
          <Nav userSession={this.state.userSession}/>
        <div class="row " style={{margin:"60px auto"}}>
          <div class="col-sm-12">
            <div class="card">
              <div class="card-body">
                <h5 class="card-title text-center">
                  Analysis Number Of User Query By Group{" "}
                </h5>
                <div style={{ height: "300px", width: "100%" }}>
                  <Bar
                    data={this.state.Data}
                    options={{ maintainAspectRatio: false }}
                  />
                </div>
                <button class="btn btn-primary m-4" onClick={this.redirectTo.bind(this)}>
                  Show Pie Graph
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
