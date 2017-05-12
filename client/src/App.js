import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import IncrementEvent from './events/IncrementEvent';

class App extends Component {

  constructor() {
    super()
  }

  handleClick() {
    this.props.app.trigger(new IncrementEvent())
  }

  render() {
    return (
      <div className="App">
        <div onClick={() => this.handleClick()}>
          {this.props.app.getState().val}
        </div>
      </div>
    );
  }
}

export default App;
