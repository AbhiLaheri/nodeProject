import React, { Component } from 'react';
import { Form } from 'react-bootstrap';
export default class User_signup extends Component {
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
		fetch('http://localhost:8000/add_employee2', {
			method: 'POST',
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				name: this.state.name,
				email:this.state.email,
				phone_number:this.state.phone_number,
				loginid:this.state.loginid,
				password: this.state.password,
				re_password: this.state.re_password,
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
			<Form>
				<Form.Group controlId="formGroupEmail">
					<Form.Label>Name : </Form.Label>
					<Form.Control type="text" placeholder="Name" 
					onChange={(event) => {
						this.setState({
							name: event.target.value
						})
					}} />
				</Form.Group>
				<Form.Group controlId="formGroupEmail">
					<Form.Label>E-mail : </Form.Label>
					<Form.Control type="email" placeholder="E-mail" 
					onChange={(event) => {
						this.setState({
							email: event.target.value
						})
					}} />
				</Form.Group>
				<Form.Group controlId="formGroupEmail">
					<Form.Label>Phone_number : </Form.Label>
					<Form.Control type="text" placeholder="phone number" 
					onChange={(event) => {
						this.setState({
							phone_number: event.target.value
						})
					}} />
				</Form.Group>
				<Form.Group controlId="formGroupEmail">
					<Form.Label>Login Id : </Form.Label>
					<Form.Control type="text" placeholder="Login Id" 
					onChange={(event) => {
						this.setState({
							loginid: event.target.value
						})
					}} />
				</Form.Group>
				<Form.Group controlId="formGroupPassword">
					<Form.Label>Password : </Form.Label>
					<Form.Control type="password" placeholder="Password" 
					onChange={(event) => {
						this.setState({
							password: event.target.value
						})
					}}  />
				</Form.Group>
				<Form.Group controlId="formGroupEmail">
					<Form.Label>Re-password : </Form.Label>
					<Form.Control type="password" placeholder="Re-password" 
					onChange={(event) => {
						this.setState({
							re_password: event.target.value
						})
					}} />
				</Form.Group>
				<button
					onClick={this.signup.bind(this)}
				>
					Sign Up
						</button>

			</Form>

			/*<div className="limiter">
				Login Id :
			<input type="text" onChange={(event) => {
					this.setState({
						name: event.target.value 
					})
				}} /><br></br>
				Password :
			<input type="password" onChange={(event) => {
					this.setState({
						password: event.target.value
					})
				}} /><br></br>*/

		)
	}
}