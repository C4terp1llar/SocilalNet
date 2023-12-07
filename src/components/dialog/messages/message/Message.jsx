import React from 'react';
import s from '../../../../css/Message.module.css'

const Message = (props) =>{
    return(
        <div className={s.wrapper}>
            <img src={'/messages/'}/>
            <div className={s.content}>
                <p>{props.messageContent}</p>
            </div>
        </div>
    );
}
export default Message;