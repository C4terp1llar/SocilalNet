import React from 'react';
import s from '../../../css/UserPosts.module.css';
import Post from './postExample/Post';


const UserPosts = () => {
    return (
        <div className={s.wrapper}>
            <div className={s.publicate}>
                <h1>Write a post:</h1>
                <div className={s.controls}>
                    <textarea placeholder='Type your post here ;)'/>
                    <button type='submit'>Send</button>
                </div>
            </div>
            <Post avatar='https://www.1zoom.ru/big2/62/199578-yana.jpg' item='adsssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssdasssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssss'/>
            <Post avatar='https://www.1zoom.ru/big2/62/199578-yana.jpg' item='adsssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssdasssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssss'/>
            <Post avatar='https://www.1zoom.ru/big2/62/199578-yana.jpg' item='adsssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssdasssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssss'/>
        </div>
    );
}

export default UserPosts;