import React, { Component } from 'react';
class PushDelete extends Component {
    constructor(props){
        super(props);
        this.state = {
            arr:[],
            name:"",
            index:0,
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
    handle(){
        this.state.arr.push({ is:this.state.index, name:this.state.name});
        this.setState({
            arr: this.state.arr,
            index:this.state.index+1
        })
        console.log(this.state.arr)
    }
    delete(arrindex){
        this.state.arr.splice(arrindex,1)
        this.setState({
            arr: this.state.arr
        })
    }

    render() {
       
    
        return (
          <div>
           <center>
            <div className="ch" >
                <input onChange={this.handleInput}/>
                <h1>{this.state.name}</h1>
              <button onClick={this.handle.bind(this)}>write</button>
               {this.state.arr.map( single=>
                  <li>{single}
                    <button  onClick={this.delete.bind(this,single.id)}> del </button>
                  </li>
                 
                ) }
             </div>
           </center>
           
          </div>
        )
      }
  }
  
      export default PushDelete;






