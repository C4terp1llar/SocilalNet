import React from 'react';
import s from '../../css/Aside.module.css';

const Aside = () => {
    return (
        <aside className={s.wrapper}>
            <nav className={s.navbar}>
                <ul className={s.list}>
                    <li className={s.item}>
                        <div className={`${s.ico} ${s.ico1}`}>
        
                        </div>
                        <a href='#' className={s.link}>
                            <p>
                                Profile
                            </p>
                        </a>
                    </li>
                    <li className={s.item}>
                        <div className={`${s.ico} ${s.ico2}`}>

                        </div>
                        <a href='#' className={s.link}>
                            <p>
                                Messages
                            </p>
                        </a>
                    </li>
                    <li className={s.item}>
                        <div className={`${s.ico} ${s.ico3}`}>

                        </div>
                        <a href='#' className={s.link}>
                            <p>
                                News
                            </p>
                        </a>
                    </li>
                    <li className={s.item}>
                        <div className={`${s.ico} ${s.ico4}`}>

                        </div>
                        <a href='#' className={s.link}>
                            <p>
                                Music
                            </p>
                        </a>
                    </li>
                    <li className={s.item}>
                        <div className={`${s.ico} ${s.ico5}`}>

                        </div>
                        <a href='#' className={s.link}>
                            <p>
                                Settings
                            </p>
                        </a>
                    </li>
                </ul>
            </nav>
        </aside>
    );
}

export default Aside;