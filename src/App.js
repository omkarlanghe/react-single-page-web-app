import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      { name: 'Max', age: 27 },
      { name: 'Ram', age: 26 },
      { name: 'Omkar', age: 24 }
    ]
  };


  switchNameHandler = () => {
    this.setState({
      persons: [
        { name: 'Christopher', age: 30 },
        { name: 'Ram', age: 26 },
        { name: 'Omkar', age: 24 }
      ]
    });
  }

  render() {
    return (
      <div className="App">
        <h1>Hi, I am a react App</h1>
        <p>Hey there, I'm using this app. This is really working</p>
        <button onClick={this.switchNameHandler}>Switch Name</button>
        <Person name={this.state.persons[0].name} age={this.state.persons[0].age}>Is a professional sofware geek</Person>
        <Person name={this.state.persons[1].name} age={this.state.persons[1].age}>Loves to play Tennis</Person>
        <Person name={this.state.persons[2].name} age={this.state.persons[2].age}>Currently learning React in this quarantine period</Person>
      </div>
    );
    // return (React.createElement('div', {className: 'App'}, React.createElement('h1', null, `Hi, I'm a React App`)));
  }
}

export default App;
