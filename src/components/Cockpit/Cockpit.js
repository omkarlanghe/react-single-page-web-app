import React from 'react';
import classes from './Cockpit.css'
const cockpit = (props) => {
    // dynamically assigning css classes
    const assignedClasses = [];
    let btnClass = '';
    if (props.showPersons) {
        btnClass = classes.Red;
    }

    if (props.persons.length <= 2) {
        assignedClasses.push(classes.red);
    }

    if (props.persons.length <= 1) {
        assignedClasses.push(classes.bold);
    }

    return (
        <div className={classes.Cockpit}>
            <h1>Hi, I am  a {props.title}</h1>
            <p className={assignedClasses.join(' ')}>Hey there, I'm using this app. This is really working</p>
            <button
                className={btnClass}
                onClick={props.clicked}>Toggle Button</button>
        </div>
    );
};

export default cockpit;
