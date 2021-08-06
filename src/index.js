import store from './redux/state';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';



let rerenderTree = () => {   
    ReactDOM.render(
    <App state={store.getState ()} addPost={store.addPost.bind(store)} 
    updateNewPostText={store.updateNewPostText.bind(store)}
    addMessage={store.addMessage.bind(store)}
    updateNewMessageText={store.updateNewMessageText.bind(store)}/>,
  document.getElementById('root'));
}
rerenderTree(store.getState ());
store.subscribe(rerenderTree);