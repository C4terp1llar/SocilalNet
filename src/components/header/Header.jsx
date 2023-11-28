import React from 'react';
import s from '../../css/Header.module.css'

const Header = () =>{
    return(
        <header className={s.wrapper}>
            <div className={s.logo}>
                <a href='#' className={s.link}>

                </a>
            </div>
            <div className={s.logo_txt}>
                <h1>CaterpillarConnect</h1>
            </div>
        </header>
    );
}

export default Header;