import React, { Component } from 'react';
export default class Post_query extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }


    render() {
        return (

            <div className="limiter">
                <div class="container-login100" >
                    <div className="wrap-login100">
                        <form>
                            <span className="login100-form-logo">
                                <i className="zmdi zmdi-landscape"></i>
                            </span>

                            <span className="login100-form-title p-b-34 p-t-27">
                                Post a Query Here
					</span>

                            <div className="wrap-input100 validate-input" >
                                <input className="input100" type="text" name="Customer name" placeholder="Customer name" />
                                <span className="focus-input100" data-placeholder="&#xf207;"></span>
                            </div>
                            
     
                            <div className="wrap-input100 validate-input" >
                                <input className="input100" type="text" name="contact" placeholder="Contact Number" />
                                <span className="focus-input100" data-placeholder="&#xf191;"></span>
                            </div>
                            <div className="wrap-input100 validate-input" >
                                <input className="input100" type="text" name="Email-Id" placeholder="Email-Id" />
                                <span className="focus-input100" data-placeholder="&#xf207;"></span>
                            </div>
                            <label>
                            <div class="dropdown">
                                <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" >
                                    Select Query for
                                    <span className="focus-input100" data-placeholder="&#xf191;"></span>
                                </button>
                                
                                      <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                    <a class="dropdown-item" href="#">Flipkart</a>
                                    <a class="dropdown-item" href="#">Club Factory</a>
                                    <a class="dropdown-item" href="#">Amazon</a>
                                    <a class="dropdown-item" href="#">Shein</a>
                                    <a class="dropdown-item" href="#">Myntra</a>
                                     <span className="focus-input100" data-placeholder="&#xf191;"></span>
                                </div>
                            </div>

                            </label>

                            <div className="wrap-input100 validate-input" >
                            <p>WRIGHT A QUERY HERE</p>
                                <textarea />
                                {/* <span className="focus-input100" data-placeholder="black"></span> */}
                            </div>
                            
                            



                            <div className="container-login100-form-btn">
                                <button className="login100-form-btn">
                                    Submit
						</button>
                            </div>

                            
                        </form>
                    </div>

                </div>

            </div>


        )
    }
}