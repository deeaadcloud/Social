import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Nav from './components/Nav/Nav';
import Profile from './components/Profile/Profile';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import { Route } from 'react-router-dom';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import UsersContainer from './components/Users/UsersContainer';
import FriendsContainer from './components/Friends/FriendsContainer';

const App = () => {
  return (
      <div className="wrapper">
        <Header />
        <Nav/>
        <div className="wrapper-content">
          <Route path="/dialogs" render={() => <DialogsContainer />} />
          <Route path="/profile" render={() => <Profile/>} />
          <Route path="/users" render={() => <UsersContainer/>} />
          <Route path="/news" render={() => <News />} />
          <Route path="/music" render={() => <Music />} />
          <Route path="/settings" render={() => <Settings />} />
          <Route path="/friends" render={() => <FriendsContainer />}/>
        </div>
      </div>)
}

export default App;
