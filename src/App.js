import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';
import styled from 'styled-components';
//import UserInput from './UserInput/UserInput'
//import UserOutput from './UserOutput/UserOutput';
const StyledButton = styled.button`
  background-color: ${props => props.alt ? 'purple' : 'green'};
  color: white;
  font: inherit;
  border: 1x solid blue;
  padding: 8px;
  cursor: pointer;
  
  &:hover {
    background-color: ${props => props.alt ? 'salmon' : 'lightgreen'};
    color: black;
  }
`;

class App extends Component {

  state = {
    username: 'Batman',
    persons: [
      { id: 'dgadg', name: 'Max', age: 27 },
      { id: 'dgdga', name: 'Ram', age: 26 },
      { id: 'hsfgs', name: 'Omkar', age: 24 }
    ],
    otherStates: 'some other values',
    showPersons: false
  };

  usernameChangedHandler = (event) => { this.setState({ username: event.target.value }); };

  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => { return (p.id === id); });

    const person = { ...this.state.persons[personIndex] };

    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    // const person = Object.assign({}, this.state.persons);

    this.setState({ persons: persons });
  }

  switchNameHandler = (newName) => {
    this.setState({
      persons: [
        { name: newName, age: 30 },
        { name: 'Ram', age: 26 },
        { name: 'Omkar', age: 24 }
      ]
    });
  };

  deletePersonHandle = (personIndex) => {
    // const persons = this.state.persons.slice(); deep copy
    const persons = [...this.state.persons]; //deep copy
    persons.splice(personIndex, 1);
    this.setState({ persons: persons });
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({ showPersons: !doesShow });
  }

  render() {

    const style = {
      backgroundColor: 'green',
      color: 'white',
      font: 'inherit',
      border: '1x solid blue',
      padding: '8px',
      cursor: 'pointer',

      ':hover': {
        backgroundColor: 'lightgreen',
        color: 'black',
      }
    };

    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return (<Person
              click={() => this.deletePersonHandle(index)}
              name={person.name}
              age={person.age}
              key={person.id}
              changed={(event) => this.nameChangedHandler(event, person.id)} />
            );
          })}
        </div>
      );
      // style.backgroundColor = 'purple';
      // style[':hover'] = {
      //   backgroundColor: 'orange',
      //   color: 'white'
      // }
    }

    // dynamically assigning css classes
    let classes = [];
    (this.state.persons.length <= 2) ? classes.push('red') : null;
    (this.state.persons.length <= 1) ? classes.push('bold') : null;

    return (
      <div className="App">
        <h1>Hi, I am a react App</h1>
        <p className={classes.join(' ')}>Hey there, I'm using this app. This is really working</p>
        <StyledButton alt={this.state.showPersons} onClick={this.togglePersonsHandler}>
          Toggle Button
        </StyledButton>
        {persons}
      </div>
    );
  }
}
export default App;
