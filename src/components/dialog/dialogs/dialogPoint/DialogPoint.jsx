import React from "react";
import s from '../../../../css/DialogPoint.module.css'
import {NavLink} from "react-router-dom";

const DialogPoint = (props) =>{
    let path = '/dialogs/' + props.opponentId;
    return(
        <div className={s.wrapper}>
            <img src={props.opponentAvatar}/>
            <NavLink className={s.item} to={path}>{props.opponentName}</NavLink>
        </div>
    );
}

export default DialogPoint;