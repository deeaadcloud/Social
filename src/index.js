import state, {subscribe} from './redux/state';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {addPost, updateNewPostText} from './redux/state';


let rerenderTree = () => {   
    ReactDOM.render(
    <App state={state} addPost={addPost} updateNewPostText={updateNewPostText}/>,
  document.getElementById('root'));
}
rerenderTree(state);
subscribe(rerenderTree);