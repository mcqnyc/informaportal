import { createStore, applyMiddleware, compose } from 'redux';
// import { composeWithDevTools } from 'redux-devtools-extension';
import ReduxPromise from 'redux-promise';
import rootReducer from './reducers/reducer_index';

// const store = createStore(rootReducer, composeWithDevTools(
const store = createStore(rootReducer, compose(
  applyMiddleware(ReduxPromise),
));

export default store;
