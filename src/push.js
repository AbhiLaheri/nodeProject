import React, { Component } from 'react';
class Push extends Component {
    constructor(props){
        super(props);
        this.state = {
            arr:[],
            name:"",
            push:[
                   {id:1, value:1},
                   {id:2, value:2}
                 ]
        }
    }
    handleInput=(e)=>{
        this.setState({
          name:e.target.value
        

        })
    }
    handle=()=>{
        this.state.arr.push(this.state.name);
        this.setState({
            arr: this.state.arr,
            name:""
        })
        console.log(this.state.arr)
    }

    render() {
       
    
        return (
          <div>
           <center>
            <div className="ch" >
                <input onChange={this.handleInput}/>
                <h1>{this.state.name}</h1>
              <button onClick={this.handle}>write</button>
               {this.state.arr.map( single=>
                  <li>{single}
                    <button > del </button>
                  </li>
                 
                ) }
             </div>
           </center>
           
          </div>
        )
      }
  }
  
      export default Push;






