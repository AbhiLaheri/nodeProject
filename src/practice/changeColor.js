import React, { Component } from 'react';
class Change extends Component {
    constructor(props){
        super(props);
        this.state = {
         
            count:1,
            n:1,
            arr:["green","red","blue"]
        }
    }

    handle=()=>{
        this.setState({
            count:this.state.count + 1,
            n:this.state.count%3
        })
        
        
        
    }
    
    render() {
       
        

      return (
        <div>
        <center>
        <div className="ch" style={{width:300, height:300, backgroundColor:this.state.arr[this.state.n]}} >
        <h1>{this.state.n}</h1>
        
          <button onClick={this.handle}>module</button>
        </div>
        </center>
        </div>
      )
    }
}

    export default Change;