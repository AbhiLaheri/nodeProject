import React, { Component } from 'react';
class First extends Component {
    constructor(props){
        super(props);
        this.state = {
            name:"akash",
            age:0,
            address:""
        }
    }
    
    myfunc(event){
        this.setState({
            name:event.target.value
        })
    }

    increment=()=>{
        this.setState({
            age:this.state.age + 1
        })
    }

    render() {
        var msg = "failed";
        if(this.props.x==12){
            msg = <h1>success</h1>;
        }


      return (
        <div className="App">
           <h1>Hello word</h1>
           {this.state.name} 
         <h1>  {this.state.age} </h1>

            <input onChange={this.myfunc.bind(this)} />
           <button
            onClick={this.myfunc.bind(this)}
           >
               Click Me

           </button> <br/>
           <button
            onClick={this.increment} >  incr </button>
        </div>
      )
      } } 
      export default First;