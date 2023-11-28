import React from 'react';
import s from '../../../../css/Post.module.css';

const Post = (props) =>{
    return(
        <div className={s.wrapper}>
            <div className={s.post}>
                <img src={props.avatar}/>
                <div className={s.item}>{props.item}</div>
            </div>
        </div>
    );
}

export default Post;