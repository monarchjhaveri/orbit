import update from 'immutability-helper';
import React from 'react';
import ReactDOM from 'react-dom';

function reactRender(Component, props, element) {
  ReactDOM.render(
    React.createElement(
      Component,
      props
    ),
    element
  )
}

class Application {
  // You initialize the application by passing in an initial state.
  constructor(initialState) {
    this._state = initialState;

    // the root component type
    this._rootComponent = null;

    // the target element
    this._element = null;
  }

  // used to get the state. don't ever get _state by itself.
  getState() {
    return this._state;
  }

  // use this instead of ReactDOM.render
  render(Component, element) {
    this._rootComponent = Component;
    this._element = element;
    reactRender(this._rootComponent, {app: this}, this._element);
  }

  // change state using this
  trigger(eventInstance) {
    this._state = update(this._state, eventInstance.process(this._state));
    this.updateListeners();
  }

  // private methodss
  _updateListeners() {
    reactRender(this._rootComponent, {app: this}, this._element);
  }
}

export {Application}
