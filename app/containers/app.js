/* @flow */

import React, { Component } from 'react';

import createLogger from 'redux-logger';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';

import * as reducers from '../reducers';
import DimeApp from './dimeApp';

const logger = createLogger();
const reducer = combineReducers(reducers);
const store = createStore(
  reducer,
  applyMiddleware(thunk, logger)
);

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <DimeApp />
      </Provider>
    );
  }
}
