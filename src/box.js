import React, { Component } from 'react';
import Del from './del'
export default class Box extends Component {
    constructor(props){
        super(props);
        this.state = {
           
            box:[
                   {id:1, value:1},
                   {id:2, value:2},
                   {id:3, value:3}
                 ]
        }
    }
    delete=(index)=>{
        console.log(index);
          this.state.box.splice(index,1) ;
          this.setState({
             box:this.state.box
          })
      }
     
    render() {
        return (
          <div>
           <center>
               {this.state.box.map(m=><Del key={m.id} value={m.value} onDelete={this.delete(this.state.box.indexOf(m.id))}/>)}
               
           </center>
          </div>
        )}

}