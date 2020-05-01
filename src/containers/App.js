import React, { Component } from 'react';
import classes from './App.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';
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



    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <Persons
          persons={this.state.persons}
          clicked={this.deletePersonHandle}
          changed={this.nameChangedHandler} />
      );
    }

    return (
      <div className={classes.App}>
        <Cockpit
          title={this.props.appTitle}
          showPersons={this.state.showPersons}
          persons={this.state.persons}
          clicked={this.togglePersonsHandler} />
        {persons}
      </div>
    );
  }
}
export default App;
