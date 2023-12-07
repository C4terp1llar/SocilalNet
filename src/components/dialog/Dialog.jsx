import React from 'react';
import s from '../../css/Dialog.module.css';
import Messages from "./messages/Messages";
import Dialogs from "./dialogs/Dialogs";


const Dialog = (props) =>{
    return(
        <main className={s.wrapper}>
            <Dialogs dialogsData={props.state.dialogsData} />
            <Messages messagesData={props.state.messagesData}/>
        </main>
    );
}

export default Dialog;