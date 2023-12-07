import React from 'react';
import s from '../../../css/Messages.module.css';
import Message from "./message/Message";


const Messages = (props) =>{
    let messagesElements = props.messagesData.map( message => <Message messageId={message.messageId} messageContent={message.message}/>);
    return(
        <div className={s.wrapper}>
            {messagesElements}
        </div>
    );
}

export default Messages;
