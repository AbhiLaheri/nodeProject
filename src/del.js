import React, { Component } from 'react';
export default class Del extends Component {
    constructor(props){
        super(props);
        this.state = {
            age:this.props.value
            
          }
      }
      increment=()=>{
        this.setState({
            age:this.state.age + 1
        })
    }
   

      render() {
        return (
          <div>
           <center>
            <div>
               <span style={{color:"red"}}>{this.state.age} </span>
               <button onClick={this.increment}>increase</button>
               <button onClick={()=>this.props.onDelete(this.props.id)}>delete</button>
            </div>
           </center>

          </div>
        )}
}