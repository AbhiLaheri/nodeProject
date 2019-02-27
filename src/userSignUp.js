import React, { Component } from 'react';
import './template/css/main.css'
import './template/fonts/iconic/css/material-design-iconic-font.min.css';
import AppNavbar from './appNavBar';
export default class UserSignUp extends Component {
	constructor(props) {
		super(props);
		this.state = {
			name: "",
			password: "",
			email:"",
			phone_number:"",
			re_password:"",
			loginid:""
		}
	}

	signup() {
		console.log("begin Signup");
		fetch('http://localhost:8000/signUp', {
			method: 'POST',
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				name: this.state.name,
				user_email:this.state.user_email,
				phone_number:this.state.phone_number,
		//		loginid:this.state.loginid,
				password: this.state.password,
		//	re_password: this.state.re_password,
			}),
		}).then((response) => response.json())
			.then((responseJson) => {
				console.log(responseJson);
				this.setState({
					msg: responseJson.message
				})

			})
			.catch((error) => {
				console.error(error);
			});

	}


	render() {
		return (
			<div>
				<AppNavbar></AppNavbar>
			<div className="limiter">
			 <div class="container-login100" >
		  <div className="wrap-login100">
		  <form>
				

				  <span className="login100-form-title p-b-34 p-t-27">
					  Sign Up
				  </span>

				  <div className="wrap-input100 validate-input" >
					  <input className="input100" type="text"  placeholder="Username" onChange={(event) => {
						this.setState({
							name: event.target.value
						})
					}}/>
					  <span className="focus-input100" data-placeholder="&#xf207;"></span>
				  </div>
				  
				  <div className="wrap-input100 validate-input" >
					  <input className="input100" type="text"  placeholder="Email" onChange={(event) => {
						this.setState({
							user_email: event.target.value
						})
					}}/>
					  <span className="focus-input100" data-placeholder="&#xf207;"></span>
				  </div>


				  <div className="wrap-input100 validate-input" >
					  <input className="input100" type="text"  placeholder="Phone Number" onChange={(event) => {
						this.setState({
							phone_number: event.target.value
						})
					}}/>
					  <span className="focus-input100" data-placeholder="&#xf207;"></span>
				  </div>
				  
				  
				  <div className="wrap-input100 validate-input" >
					  <input className="input100" type="password"  placeholder="Password" onChange={(event) => {
						this.setState({
							password: event.target.value
						})
					}}/>
					  <span className="focus-input100" data-placeholder="&#xf191;"></span>
				  </div>
				  <div className="wrap-input100 validate-input" >
					  <input className="input100" type="password"  placeholder="Confirm Password" onChange={(event) => {
						this.setState({
							password: event.target.value
						})
					}}/>
					  <span className="focus-input100" data-placeholder="&#xf191;"></span>
				  </div>

				  <div className="container-login100-form-btn">
					  <button className="login100-form-btn" onClick={this.signup.bind(this)}>
						  Sign Up
					  </button>
				  </div>
       
				 
			  </form>
			  <span class="badge badge-success">{this.state.msg}</span> 
		  </div>
	  
	  </div>
	  
		  </div>
		  </div>
		)
		
	}
}