import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import Routerr from './loginAndSignup/router';
//import Login from './login';
import Admin from './admin';
import * as serviceWorker from './serviceWorker';
<<<<<<< HEAD



//ReactDOM.render(<Login/>, document.getElementById('root'));
ReactDOM.render(<Admin/>, document.getElementById('root'));
=======
//import Emp from './Emp1';
import AppNavbar from './appNavBar';
//import UserQuery from './userQuery';

ReactDOM.render(<AppNavbar/>, document.getElementById('root'));
//ReactDOM.render(<Home/>, document.getElementById('root'));
>>>>>>> c9e36021034ae02c78c6f177ec7754855557a5f1

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();