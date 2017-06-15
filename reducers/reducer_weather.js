import { FETCH_WEATHER } from '../actions/action-creators.js';

export default function(state = [], action){
  console.log('action recvd', action);
  switch (action.type){
    case FETCH_WEATHER:
      return state.concat(action.payload.data);
      // return [ action.payload.data, ...state, console.log('FETCH_WEATHER state : ',state)];
  }
  // console.log('DEFAULT state. . .',state)
  return state;
}