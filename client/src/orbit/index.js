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
  constructor(initialState) {
    this._state = initialState;
    this._rootComponent = null;
    this._element = null;
  }

  getState() {
    return this._state;
  }

  render(Component, element) {
    this._rootComponent = Component;
    this._element = element;
    reactRender(this._rootComponent, {app: this}, this._element);
  }

  updateListeners() {
    reactRender(this._rootComponent, {app: this}, this._element);
  }

  trigger(event) {
    this._state = update(this._state, event.process(this._state));
    this.updateListeners();
  }
}

export {Application}
