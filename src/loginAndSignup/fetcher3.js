import React, { Component } from 'react';
import './stylee.css';

export default class Fetcher3 extends Component {
    constructor(props){
        super(props);
        this.state = {
         arr:[
            
          ],
          msg:""
        }
    }
    componentDidMount(){
      fetch("http://localhost:8000/login", {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: 'a@gmail.com',
          password: 'password',
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
