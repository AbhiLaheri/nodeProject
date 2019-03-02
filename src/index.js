import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import Routerr from './loginAndSignup/router';
//import Admin from './admin';
//import Login from './login';
//import Home from './home';

import * as serviceWorker from './serviceWorker';
import Emp from './Emp1';
//import UserQuery from './userQuery';
//import AppNavbar from './appNavBar';

ReactDOM.render(<Emp/>, document.getElementById('root'));
//ReactDOM.render(<Home/>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();