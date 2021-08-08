import store from './redux/redux-store';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';



let rerenderTree = () => {   
    ReactDOM.render(
    <App state={store.getState ()} dispatch={store.dispatch.bind(store)} 
    />,
  document.getElementById('root'));
}
rerenderTree(store.getState ());
store.subscribe(rerenderTree);