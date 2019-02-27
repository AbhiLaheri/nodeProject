import React, { Component } from 'react';
import AppNavbar from './appNavBar';
export default class UserQuery extends Component {
    constructor(props) {
        super(props);
        this.state = {
            answer:""

        }
    }
    handleRadio(e){
         this.setState({
             answer: e.target.value
         });
    }

    render() {
        return (
            <div>
            <AppNavbar></AppNavbar>
            <center>
                <form style={{marginTop:"7%"}}>
                    <h2>Select Query For :{this.state.answer}</h2>

                    <input
                        type="radio"
                        name="formHorizontalRadios"
                        value="Flipkart"
                        onChange={this.handleRadio.bind(this)}
                    />Flipkart<br></br>
                    <input
                       type="radio"
                       name="formHorizontalRadios"
                       value="Amazon"
                       onChange={this.handleRadio.bind(this)}
                    />Amazon<br></br>
                    <input
                        type="radio"
                        name="formHorizontalRadios"
                        value="Myntra"
                        onChange={this.handleRadio.bind(this)}
                    />Myntra<br></br>
                    <input
                        type="radio"
                        label="Club Factory"
                        name="formHorizontalRadios"
                        id="formHorizontalRadios3"
                    />Other<br></br>
                    <br></br>

                   <div class="form-group">
                       <label for="comment">Write Your Query Here :</label>
                       <textarea class="form-control" rows="5" id="comment" style={{width:500, height:200}}></textarea>
                  </div>

                   <button class="m-4 btn btn-success">Submit</button>
                   <button class="m-4 btn btn-danger">Reset</button>
                </form>
            </center>
         </div>   


        )
    }
}