import React from 'react';
import s from './Dialogs.module.css';
import { NavLink } from 'react-router-dom';

const Dialogs = () => {
    return (
        <div className={s.main}>
            <div className={s.title}>Messages</div>
            <div className={s.inner}>
                <div className={s.name}>
                    <div className={s.name_items}>
                        <NavLink to="/dialogs/1" activeClassName={s.active}>
                            Catherine
                        </NavLink>
                    </div>
                    <div className={s.name_items}>
                        <NavLink to="/dialogs/2" activeClassName={s.active}>
                            Vladimir
                        </NavLink>
                    </div>
                    <div className={s.name_items}>
                        <NavLink to="/dialogs/3" activeClassName={s.active}>
                            Pavel
                        </NavLink>
                    </div>
                    <div className={s.name_items}>
                        <NavLink to="/dialogs/4" activeClassName={s.active}>
                            Max
                        </NavLink>
                    </div>
                    <div className={s.name_items}>
                        <NavLink to="/dialogs/5" activeClassName={s.active}>
                            Vladislav
                        </NavLink>
                    </div>
                    <div className={s.name_items}>
                        <NavLink to="/dialogs/6" activeClassName={s.active}>
                            Makar
                        </NavLink>
                    </div>
                </div>
                <div className={s.messages}>
                    <div className={s.messages_items}>hi</div>
                    <div className={s.messages_items}>hello</div>
                    <div className={s.messages_items}>how are you</div>
                    <div className={s.messages_items}>you stupid</div>
                </div>
            </div>
        </div>

    )

}

export default Dialogs;