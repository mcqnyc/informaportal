import { FETCH_WEATHER } from '../actions/action-creators';

export default function (state = [], action) {
  console.log('WEATHER action recvd', action);
  switch (action.type) {
    case FETCH_WEATHER:
      if (action.payload.message === 'Network Error') {
        const errorMsg = action.payload.message;
        const error = `There was a ${errorMsg} getting the weather. Please check back later.`;
        return state.concat(error);
        // return state;
      }
      if (action.payload.status !== 200) {
        alert('Please check the spelling of the city name that you entered.');
        return state;
      }
      return state.concat(action.payload.data);
      // return [ action.payload.data, ...state, console.log('FETCH_WEATHER state : ',state)];
    default:
      return state;
  }
}
