import React, { Component } from 'react';
import './stylee.css';

export default class Fetcher extends Component {
    constructor(props){
        super(props);
        this.state = {
         arr:[
            
          ]
        }
    }
    componentDidMount(){
        fetch("https://reqres.in/api/users?page=2")
        .then(response=> response.json())
        .then(responsejson=>{
          //  console.log(responsejson.data)
            this.setState({
                arr:responsejson.data
            })
        })
    }
    
    render() {
       
      return (
        <div  >
        
          {this.state.arr.map((single)=>
         <div class="card">  
           <img src={single.avatar} alt="Smiley face" />      
          <p class="title" >Roll No:<span style={{marginRight:4}}/>{single.id}</p>
          <p class="title">Name:<span style={{marginRight:4}}/>{single.first_name}<span style={{marginRight:4}}/>{single.last_name}</p>
         
         
          </div> 
          )
          
          }
         
          
        
        </div>
      )
    }
}
