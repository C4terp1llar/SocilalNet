import React from 'react';
import s from '../../../css/Dialogs.module.css';
import DialogPoint from "./dialogPoint/DialogPoint";





const Dialogs = (props) =>{

    let dialogElements = props.dialogsData.map( dialog => <DialogPoint opponentName={dialog.opponentName} opponentId={dialog.id} opponentAvatar={dialog.opponentAvatar} />);

    return(
        <div className={s.wrapper}>
            <ul className={s.list}>
                {dialogElements}
            </ul>
        </div>
    );
}

export default Dialogs;