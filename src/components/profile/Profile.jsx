import React from 'react';
import s from '../../css/Profile.module.css'
import UserWallpaper from './userWallpaper/UserWallpaper';
import UserInfo from './userInfo/UserInfo';
import UserPosts from './userPosts/UserPosts';

const Profile = (props) =>{
    return(
        <main className={s.wrapper}>
            <UserWallpaper wallpaper='https://w.forfun.com/fetch/da/daf8eb568fea522f6701fb9c66378cdc.jpeg'/>
            <UserInfo />
            <UserPosts postsData={props.state.postsData}/>
        </main>
    );
}

export default Profile;