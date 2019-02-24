import React, { Component } from 'react';
import { Form } from 'react-bootstrap';
export default class Login extends Component {
	constructor(props) {
		super(props);
		this.state = {
			name: "",
			password: ""
		}
	}

	login() {
		console.log("begin login");
		fetch('http://localhost:8000/add_employee2', {
			method: 'POST',
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				name: this.state.name,
				password: this.state.password,
				//address: 'yourOtherValue',
				//phone_number:"123",
				//salary:"1235"
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
					<Form.Label>Login Id : </Form.Label>
					<Form.Control type="text" placeholder="Enter Login Id" 
					onChange={(event) => {
						this.setState({
							name: event.target.value
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
				<button
					onClick={this.login.bind(this)}
				>
					Login
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