import React from 'react';
//import '../Person/Person.css';
import styled from 'styled-components';

const StyledDiv = styled.div`
    width: 60%;
    margin: 16px auto;
    border: 1px solid #eee;
    box-shadow: 0 2px 3px #ccc;
    padding: 16px;
    text-align: center;

    @media (min-width: 500px) {
        width: '450px';
    }
`;

const person = (props) => {
    return (
        //<div className="Person" style={style}>
        <StyledDiv>
            <p onClick={props.click}> I'm {props.name} with age: {props.age}</p>
            <p> {props.children}</p>
        </StyledDiv>
    );
}

export default person;
