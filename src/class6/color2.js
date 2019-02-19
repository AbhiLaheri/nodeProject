import React, { Component } from 'react';
import './stylee.css';
import './backGraund';

export default class Color2 extends Component {
    constructor(props){
        super(props);
        this.state = {
         arr2:this.props.arr
        }
    }
    
    
    render() {
       
      return (
          
        <div  >
          
          <div className="card" style={{backgroundColor:this.props.value}}>  
          <h2>this is child page</h2> 
          </div> 
        </div>
      )
          
    }
         
}
