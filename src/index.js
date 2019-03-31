import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import Routerr from './loginAndSignup/router';
//import Login from './login';
// import Admin from './admin';
import * as serviceWorker from './serviceWorker';
//import Emp from './Emp1';
import AppNavbar from './appNavBar';
//import UserQuery from './userQuery';

ReactDOM.render(<AppNavbar/>, document.getElementById('root'));
//ReactDOM.render(<Home/>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();