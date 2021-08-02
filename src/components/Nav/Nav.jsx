import React from 'react';
import { NavLink } from 'react-router-dom';
import Friends from '../Friends/Friends';
import s from './Nav.module.css';

const Nav = (props) => {
  return (
    <nav className={s.nav}>
      <div className={s.items}>
        <NavLink to="/profile" activeClassName={s.active}>Profile</NavLink>
        <NavLink to="/dialogs" activeClassName={s.active}>Messages</NavLink>
        <NavLink to="/news" activeClassName={s.active}>News</NavLink>
        <NavLink to="/music" activeClassName={s.active}>Music</NavLink>
        <NavLink to="/settings" activeClassName={s.active}>Settings</NavLink>
      </div>
      <Friends name={props.friendsPage.name} src={props.friendsPage.src}/>
    </nav >
    
  )
}

export default Nav;