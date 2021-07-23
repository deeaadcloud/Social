import React from 'react';
import './App.css';
import Header from './components/Header';
import Nav from './components/Nav';
import Profile from './components/Profile';

const App = () => {
  return (<div className="wrapper">
    <Header />
    <Nav />
    <Profile />
  </div>
  )
}

export default App;
