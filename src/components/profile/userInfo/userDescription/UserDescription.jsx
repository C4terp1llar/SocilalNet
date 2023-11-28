import React from 'react';
import s from '../../../../css/UserDescription.module.css';

const UserDescription = (props) => {
    return (
        <div className={s.wrapper}>
            <h1>Description:</h1>
            <div className={s.description}>
                <p><strong>Name: </strong>{props.name}</p>
                <p><strong>Surname: </strong>{props.surname}</p>
                <p><strong>Age: </strong>{props.age}</p>
                <p><strong>City: </strong>{props.city}</p>
                <p><strong>Education: </strong>{props.education}</p>
            </div>
        </div>
    );
}

export default UserDescription;