import React, { Component } from 'react';
//import AppNavbar from './appNavBar';
export default class UserQuery extends Component {
    constructor(props) {
        super(props);
        this.state = {
            company:"",
            query:"",
            userSession:""

        }
    }
    handleRadio(e){
         this.setState({
             company: e.target.value,
             userSession: localStorage.getItem('myCat')
         });
    }
    formReset(){
        this.setState({
            company: "",
            query:""
        });
    }
    handleTextArea(e){
        this.setState({
            query: e.target.value
        });
    }
    querSubmit() {
	  if(this.state.query === "" || this.state.query== null ) alert("enter query!!!!");
    
      if( this.state.company === "" || this.state.company== null) alert("enter COMPANY!!!!");
		console.log("begin login");
		fetch('http://localhost:8000/login', {
			method: 'POST',
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				query: this.state.query,
				company: this.state.company,
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
            <div> <center>
          
                <form style={{marginTop:"10%"}}>
                
                    <h2>Select Query For :{this.state.company}{this.state.query}{this.state.userSession}</h2>

                    <input
                        type="radio"
                        name="rd1"
                        value="Flipkart"
                        onChange={this.handleRadio.bind(this)}
                    />Flipkart<br></br>
                    <input
                       type="radio"
                       name="rd1"
                       value="Amazon"
                       onChange={this.handleRadio.bind(this)}
                    />Amazon<br></br>
                    <input
                        type="radio"
                        name="rd1"
                        value="Myntra"
                        onChange={this.handleRadio.bind(this)}
                    />Myntra<br></br>
                    <input
                        type="radio"
                        name="rd1"
                        value="Other"
                        onChange={this.handleRadio.bind(this)}
                    />Other<br></br>
                    <br></br>
                 
                    <div className="form-group m-1" style={{}}>
                       <label for="comment">Write Your Query Here :</label>
                       <textarea class="form-control" style={{width:"25%", height:"25%"}}
                       onChange={this.handleTextArea.bind(this)} value={this.state.query}> </textarea>
                  </div>

                   <button className="m-4 btn btn-success"querSubmit onClick={this.querSubmit.bind(this)}>Submit</button>
                   <button className="m-4 btn btn-danger" onClick={this.formReset.bind(this)}>Reset</button>
                </form>
            </center>
         </div>   


        )
    }
}