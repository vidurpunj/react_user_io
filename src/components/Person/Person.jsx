import React from 'react';

const person = (props) => {
    const style = {
        border: '2px black solid',
        height: '20px',
        width: '200px',
    };

    return <div className="center" style={style} onClick={props.click} >
        <label className="">Name: {props.personName} age: {props.personAge}</label>
    </div>
}

export default person;