import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Nav from './components/Nav/Nav';
import Profile from './components/Profile/Profile';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import Friends from './components/Friends/Friends';
import { Route } from 'react-router-dom';
import DialogsContainer from './components/Dialogs/DialogsContainer';

const App = () => {
  return (
      <div className="wrapper">
        <Header />
        <Nav/>
        <div className="wrapper-content">
          <Route path="/dialogs" render={() => <DialogsContainer />} />
          <Route path="/profile" render={() => <Profile/>} />
          <Route path="/news" render={() => <News />} />
          <Route path="/music" render={() => <Music />} />
          <Route path="/settings" render={() => <Settings />} />
          {/* <Route path="/friends" render={() => <Friends  friendsPage={props.state.friendsPage}/>} /> */}
        </div>
      </div>)
}

export default App;
