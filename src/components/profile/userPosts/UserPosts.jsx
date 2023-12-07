import React from 'react';
import s from '../../../css/UserPosts.module.css';
import Post from './postExample/Post';



const UserPosts = (props) => {
    let postsElements = props.postsData.map( post => <Post postId={post.postId} avatar={post.avatar} postContent={post.postContent}/>);
    return (
        <div className={s.wrapper}>
            <div className={s.publicate}>
                <h1>Write a post:</h1>
                <div className={s.controls}>
                    <textarea placeholder='Type your post here ;)'/>
                    <button type='submit'>Send</button>
                </div>
            </div>
            {postsElements}
        </div>
    );
}

export default UserPosts;