import React from 'react';
// import ReactDOM from 'react-dom';
// import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import ReduxPromise from 'redux-promise';
import { composeWithDevTools } from 'redux-devtools-extension';

// import App from './client/ClientApp.js';
import rootReducer from './reducers/reducer_index.js';

const store = createStore(rootReducer, composeWithDevTools(
  applyMiddleware(ReduxPromise)
));
// const store = createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore);

// ReactDOM.render(
//   <Provider store={createStoreWithMiddleware(reducers)}>
//     <App />
//   </Provider>
//   , document.querySelector('.app'));
export default store;