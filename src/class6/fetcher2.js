import React, { Component } from 'react';
import './stylee.css';

export default class Fetcher2 extends Component {
    constructor(props){
        super(props);
        this.state = {
         arr:[
            
          ],
          msg:""
        }
    }
    componentDidMount(){
      fetch("https://reqres.in/api/login", {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: 'yourValue',
          password: 'yourOtherValue',
        }),
      })
      .then(response=> response.json())
      .then(responsejson=>{
         if(responsejson.token){
          this.setState({
                  msg:"login succesfull"   })
         }
        else{
          this.setState({
            msg:"login unsuccesfull"   })
   }
         
      })
  }
    
    render() {
       
      return (
        <div  >
        
         
         <div class="card">  
          <h1>{this.state.msg}</h1> 
         
         
          </div> 
          )
          
          }
         
          
        
        </div>
      )
    }
}
