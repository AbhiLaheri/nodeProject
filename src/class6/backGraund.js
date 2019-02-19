import React, { Component } from 'react';
import './stylee.css';
import '../template/vendor/bootstrap/css/bootstrap.min.css';
import Color2 from './color2';

export default class BackGraund extends Component {
    constructor(props){
        super(props);
        this.state = {
         arr:[
            
          ],
          msg:""
        }
    }
    change=()=>{
        fetch("http://www.colr.org/json/color/random")
        .then(response=> response.json())
        .then(responsejson=>{
            console.log(responsejson)
            this.setState({
                arr:"#"+responsejson.colors[0].hex
        
            })
        })
    }
    
    render() {
       
      return (
          
        <div  >
          <div className="card" style={{backgroundColor:this.state.arr}}> 
          <button className="btn btn-success" style={{marginTop:190}}onClick={this.change}>Change Color</button> 
          </div> <br/>
          <Color2 value={this.state.arr} />
        </div>
      )
          
    }
         
}
