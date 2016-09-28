import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Todo from './todo'

class App extends Component {
  render() {
    return (
      <div>
        <div className="App">
          <div className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h2>Welcome to React</h2>
          </div>
        </div>
        <h1>Todo</h1>
        <Todo />
      </div>
    );
  }
}

export default App;
