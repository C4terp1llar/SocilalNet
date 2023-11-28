import React from 'react';
import s from '../../css/Aside.module.css';
import {NavLink} from "react-router-dom";

const SelectedLink = ({isActive}) => isActive ?`${s.link} ${s.active}`: s.link;
const Aside = () => {
    return (
        <aside className={s.wrapper}>
            <nav className={s.navbar}>
                <ul className={s.list}>
                    <li className={s.item}>
                        <div className={`${s.ico} ${s.ico1}`}>
        
                        </div>
                        <NavLink to='/profile' className={SelectedLink}>
                            <p>
                                Profile
                            </p>
                        </NavLink>
                    </li>
                    <li className={s.item}>
                        <div className={`${s.ico} ${s.ico2}`}>

                        </div>
                        <NavLink to='/dialog' className={SelectedLink}>
                            <p>
                                Messages
                            </p>
                        </NavLink>
                    </li>
                    <li className={s.item}>
                        <div className={`${s.ico} ${s.ico3}`}>

                        </div>
                        <NavLink to='news' className={SelectedLink}>
                            <p>
                                News
                            </p>
                        </NavLink>
                    </li>
                    <li className={s.item}>
                        <div className={`${s.ico} ${s.ico4}`}>

                        </div>
                        <NavLink to='music' className={SelectedLink}>
                            <p>
                                Music
                            </p>
                        </NavLink>
                    </li>
                    <li className={s.item}>
                        <div className={`${s.ico} ${s.ico5}`}>

                        </div>
                        <NavLink to='settings' className={SelectedLink}>
                            <p>
                                Settings
                            </p>
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </aside>
    );
}



export default Aside;