import React from 'react';
// import ReactDOM from 'react-dom';
// import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import ReduxPromise from 'redux-promise';

// import App from './client/ClientApp.js';
import rootReducer from './reducers/index.js';

const store = createStore(rootReducer, compose(applyMiddleware(ReduxPromise)));
// const store = createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore);

// ReactDOM.render(
//   <Provider store={createStoreWithMiddleware(reducers)}>
//     <App />
//   </Provider>
//   , document.querySelector('.app'));
export default store;