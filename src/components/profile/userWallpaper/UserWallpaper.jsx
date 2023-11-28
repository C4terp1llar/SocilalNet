import React from 'react';
import s from '../../../css/UserWallpaper.module.css';

const UserWallpaper = (props) => {
    return (
        <div className={s.wrapper}>
            <img src={props.wallpaper} />
        </div>
    );
}

export default UserWallpaper;