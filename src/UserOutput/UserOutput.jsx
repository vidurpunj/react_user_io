import React from 'react';
import './UserOutput.css';

const userOutput = (props) => {
    return (
        <div>
            <h1>This text is updated</h1>
            <label name="userOutputComponent" className="UserOutput">{props.userName}</label>
        </div>
    )
}

export default userOutput;