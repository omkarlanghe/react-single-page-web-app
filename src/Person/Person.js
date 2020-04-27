import React from 'react';
import '../Person/Person.css';
const person = (props) => {
    return (
        <div className="Person">
            <p onClick={props.click}>I'm {props.name} with age: {props.age}</p>
            <p>{props.children}</p>
        </div>
    );
}

export default person;
