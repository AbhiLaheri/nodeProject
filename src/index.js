import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import Routerr from './loginAndSignup/router';
<<<<<<< HEAD


import * as serviceWorker from './serviceWorker';
import SignUp from './loginAndSignup/signUp';

//ReactDOM.render(<Login/>, document.getElementById('root'));
ReactDOM.render(<SignUp/>, document.getElementById('root'));
=======
//import Emp1 from './Emp1';
//import User_signup from './User_signup';
//import Login from './login';
//import Home from './Home';
import Admin from './admin';
import * as serviceWorker from './serviceWorker';
//import SignUp from './loginAndSignup/signUp';

ReactDOM.render(<Admin/>, document.getElementById('root'));
//ReactDOM.render(<Home/>, document.getElementById('root'));
>>>>>>> 96265ab508effe2ba63838183a9f8701696984bc

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();