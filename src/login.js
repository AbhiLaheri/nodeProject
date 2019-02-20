import React, { Component } from 'react';

export default class Login extends Component {
	constructor(props) {
		super(props);
		this.state = {
			name:"",
			msg:""
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
				address: 'yourOtherValue',
				phone_number:"123",
				salary:"1235"
			}),
		}).then((response) => response.json())
		.then((responseJson) => {
			console.log(responseJson);
			this.setState({
				msg: responseJson.message
			})

		})
		.catch((error) =>{
			console.error(error);
		});

	}


	render() {
		return (

			<div >
			<input  onChange={(event)=>{
				this.setState({
					name: event.target.value
				})
			}} />
			{this.state.msg}
				<button 
								onClick={this.login.bind(this)}
								>
									Login
						</button>
			</div>


		)
	}
}