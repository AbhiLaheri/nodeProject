import React, { Component } from 'react';
import './template/vendor/bootstrap/css/bootstrap.min.css';
import './template/fonts/iconic/css/material-design-iconic-font.min.css';
import './template/css/util.css';
import './template/css/main.css';
export default class Login extends Component {
    constructor(props){
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
						Log in
					</span>

					<div className="wrap-input100 validate-input" >
						<input className="input100" type="text" name="username" placeholder="Username"/>
						<span className="focus-input100" data-placeholder="&#xf207;"></span>
					</div>

					<div className="wrap-input100 validate-input" >
						<input className="input100" type="password" name="pass" placeholder="Password"/>
						<span className="focus-input100" data-placeholder="&#xf191;"></span>
					</div>

					

					<div className="container-login100-form-btn">
						<button className="login100-form-btn">
							Login
						</button>
					</div>

					<div className="text-center p-t-90">
						<a className="txt1" href="#">
							Forgot Password?
						</a>
					</div>
				</form>
			</div>
		
		</div>
		
        	</div>

        
        )}
}