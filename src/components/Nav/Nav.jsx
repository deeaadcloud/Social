import React from 'react';
import { NavLink } from 'react-router-dom';
import FriendsContainer from '../Friends/FriendsContainer';
import s from './Nav.module.css';

const Nav = () => {
  return (
    <nav className={s.nav}>
      <div className={s.items}>
        <NavLink to="/profile" activeClassName={s.active}>Profile</NavLink>
        <NavLink to="/dialogs" activeClassName={s.active}>Messages</NavLink>
        <NavLink to="/news" activeClassName={s.active}>News</NavLink>
        <NavLink to="/music" activeClassName={s.active}>Music</NavLink>
        <NavLink to="/settings" activeClassName={s.active}>Settings</NavLink>
        <NavLink to="/users" activeClassName={s.active}>Friends</NavLink>
      </div>
      <FriendsContainer />
    </nav >
    
  )
}

export default Nav;