import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Nav from './components/Nav/Nav';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import Friends from './components/Friends/Friends';
import { BrowserRouter, Route } from 'react-router-dom';



const App = (props) => {
  return (
    <BrowserRouter>
      <div className="wrapper">
        <Header />
        <Nav friendsPage={props.state.friendsPage}/>
        <div className="wrapper-content">
          <Route path="/dialogs" render={() => <Dialogs
            dialogsPage={props.state.dialogsPage} />} />
          <Route path="/profile" render={() => <Profile
            profilePage={props.state.profilePage} />} />
          <Route path="/news" render={() => <News />} />
          <Route path="/music" render={() => <Music />} />
          <Route path="/settings" render={() => <Settings />} />
          <Route path="/friends" render={() => <Friends 
          friendsPage={props.state.friendsPage}/>} />
        </div>
      </div>
    </BrowserRouter>)
}

export default App;
