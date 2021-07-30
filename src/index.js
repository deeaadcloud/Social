import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

let posts = [
  { id: 1, post: 'Hi, how are you?', likesCount: 12 },
  { id: 2, post: 'Hello!', likesCount: 10 },
  { id: 3, post: 'how are you', likesCount: 8 },
  { id: 4, post: 'you stupid', likesCount: 3 }

]
let dialogs = [
  { id: 1, name: "Catherine" },
  { id: 2, name: "Vladimir" },
  { id: 3, name: "Pavel" },
  { id: 4, name: "Max" },
  { id: 5, name: "Vladislav" },
  { id: 6, name: "Makar" }
]

let messages = [
  { id: 1, message: 'hi' },
  { id: 2, message: 'hello' },
  { id: 3, message: 'how are you' },
  { id: 4, message: 'you stupid' }
]


ReactDOM.render(
  <React.StrictMode>
    <App posts={posts} dialogs={dialogs} messages={messages}/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
