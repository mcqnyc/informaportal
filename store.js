import React from 'react';
import { createStore, applyMiddleware, compose } from 'redux';
import ReduxPromise from 'redux-promise';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from './reducers/reducer_index.js';

const store = createStore(rootReducer, composeWithDevTools(
  applyMiddleware(ReduxPromise)
));

export default store;