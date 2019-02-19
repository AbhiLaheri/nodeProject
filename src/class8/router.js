import React, { Component } from 'react';
import{
    BrowserRouter as Router,
    Route, Link
} from "react-router-dom";
import Login from '../login';
import Fetcher3 from '../class6/fetcher3';

export default class Routerr extends Component {
    constructor(props){
        super(props);
        this.state = {
         arr:[ ],
         msg2:"" 
        }
    }

render(){
    return(
        <div>
            <Router>
                <div>
                    <Link to={{pathname:'/login',
                state:{
                    name:"abhi"
                }}}>Login</Link>
                    <Link to="/l">home</Link>
                    <Route exact path="/l" component={Login} />
                    <Route exact path="/login" component={Fetcher3} />
                </div>
            </Router>
        </div>
    )
}


}    