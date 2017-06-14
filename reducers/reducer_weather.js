import { FETCH_WEATHER } from '../actions/action-creators.js';

export default function(state = [], action){
  console.log('action recvd', action);
  switch (action.type){
    case FETCH_WEATHER:
      return [ action.payload.data, ...state ];
  }
  return state;
}