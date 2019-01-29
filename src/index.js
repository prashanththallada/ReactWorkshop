import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './containers/JavaScripts/App';
import Aside from './containers/JavaScripts/Aside';
import Header from './components/Header/Header';
import Notification from './containers/JavaScripts/Notification';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App />, document.getElementById('subRoot'));
ReactDOM.render(<Aside />, document.getElementById('Aside'));
ReactDOM.render(<Header />, document.getElementById('header'));
ReactDOM.render(<Notification />, document.getElementById('notification'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
