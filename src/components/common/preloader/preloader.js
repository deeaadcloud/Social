import React from 'react';
import preloader from '../../../assets/images/preloader.png'
import s from '../../Users/Users.module.css'

let Preloader = (props) =>{
    return <div className={s.preloaderImg}><img src={preloader} /></div>
               
}

export default Preloader;