import React from 'react';
import s from '../../../css/UserInfo.module.css';
import UserAvatar from './userAvatar/UserAvatar';
import UserDescription from './userDescription/UserDescription';

const UserInfo = () => {
    return (
        <div className={s.wrapper}>
            <UserAvatar avatar='https://www.1zoom.ru/big2/62/199578-yana.jpg'/>
            <UserDescription 
            name='Vlad' 
            surname='Moskvitin' 
            age='18'
            city='Stavropol'
            education='StGAU'
            />
        </div>
    );
}

export default UserInfo;