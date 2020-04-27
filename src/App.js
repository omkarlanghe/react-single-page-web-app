import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';
//import UserInput from './UserInput/UserInput'
//import UserOutput from './UserOutput/UserOutput';

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
      backgroundColor: 'white',
      font: 'inherit',
      border: '1x solid blue',
      padding: '8px',
      cursor: 'pointer'
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
              changed={(event) => this.nameChangedHandler(event, person.id)} />);
          })}
        </div>
      );
    }

    return (
      <div className="App">
        <h1>Hi, I am a react App</h1>
        <p>Hey there, I'm using this app. This is really working</p>
        <button
          style={style}
          onClick={this.togglePersonsHandler}>Switch Name</button>
        {persons}
        {/* <UserInput changed={this.usernameChangedHandler}
          value={this.state.username} />
        <UserOutput userName={this.state.username} />
        <UserOutput userName={this.state.username} />
        <UserOutput userName="Max" /> */}
      </div>
    )
  }
}
export default App;
