import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import Routerr from './loginAndSignup/router';
import Login from './login';


import * as serviceWorker from './serviceWorker';
//import SignUp from './loginAndSignup/signUp';

//ReactDOM.render(<Login/>, document.getElementById('root'));
ReactDOM.render(<Login/>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();