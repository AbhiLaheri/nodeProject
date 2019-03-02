import React, { Component } from "react";
import AppNavbar from './appNavBar'; 
import "./template/css/style.css";
export default class Admin extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <AppNavbar></AppNavbar>
        <div className="admin-body">
          <div class="row">
            <div class="col-sm-3">
              <div class="card">
                <div class="card-body">
                  <h5 class="card-title">All Company</h5>
                </div>
                <ul class="list-group list-group-flush">
                  <li class="list-group-item">
                    <input type="radio" name="cm1"/>
                    Flipkart
                  </li>
                  <li class="list-group-item">
                    <input type="radio" name="cm1" />
                    Myntra
                  </li>
                  <li class="list-group-item">
                    <input type="radio" name="cm1" />
                    Amazon
                  </li>
                  <li class="list-group-item">
                    <input type="radio" name="cm1"/>
                    Other
                  </li>
                 
                  <button class="btn btn-primary">Allocate Query</button>
                 
                </ul>
              </div>
            </div>
            <div class="col-sm-4">
              <div class="card">
                <div class="card-body">
                  <h5 class="card-title">All available Employee</h5>
                </div>
                <ul class="list-group list-group-flush">
                <li class="list-group-item"> <input type="radio" name="em1"/>Cras justo odio</li>
                  <li class="list-group-item"> <input type="radio" name="em1"/>Dapibus ac facilisis in</li>
                  <li class="list-group-item"><input type="radio" name="em1"/>Vestibulum at eros</li>
                  <li class="list-group-item"> <input type="radio" name="em1"/>Cras justo odio</li>
                  <li class="list-group-item"> <input type="radio" name="em1"/>Dapibus ac facilisis in</li>
                  <li class="list-group-item"><input type="radio" name="em1"/>Vestibulum at eros</li>
                </ul>
              </div>
            </div>
            <div class="col-sm-4">
              <div class="card">
                <div class="card-body">
                  <h5 class="card-title">All user token:</h5>
                </div>
                <ul class="list-group list-group-flush">
                  <li class="list-group-item"> <input type="radio" name="us1"/>Cras justo odio</li>
                  <li class="list-group-item"> <input type="radio" name="us1"/>Dapibus ac facilisis in</li>
                  <li class="list-group-item"><input type="radio" name="us1"/>Vestibulum at eros</li>
                  <li class="list-group-item"> <input type="radio" name="us1"/>Cras justo odio</li>
                  <li class="list-group-item"> <input type="radio" name="us1"/>Dapibus ac facilisis in</li>
                  <li class="list-group-item"><input type="radio" name="us1"/>Vestibulum at eros</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
