import React from 'react';
import s from '../../../../css/UserAvatar.module.css';

const UserAvatar = (props) => {
    return (
        <div className={s.wrapper}>
            <img src={props.avatar}/>
        </div>
    );
}

export default UserAvatar;