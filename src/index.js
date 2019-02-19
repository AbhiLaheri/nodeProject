import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Routerr from './class8/router';
// import Delete from './practice/delete';
//import Box from './box';
//import Login from './login';
//import Fetcher2 from './class6/fetcher2';
import BackGraund from './class6/backGraund';
import * as serviceWorker from './serviceWorker';

//ReactDOM.render(<Login/>, document.getElementById('root'));
ReactDOM.render(<Routerr/>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();