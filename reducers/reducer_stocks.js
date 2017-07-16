import { FETCH_STOCKS } from '../actions/action-creators';

export default function (state = [], action) {
  console.log('action recvd', action);
  switch (action.type) {
    case FETCH_STOCKS:
      // if (action.payload.status !== 200) {
      //   alert('Please check the spelling of the city name that you entered.');
      //   return state;
      // }
      return state.concat(action.payload.data);
      // return [ action.payload.data, ...state, console.log('FETCH_WEATHER state : ',state)];
    default:
      return state;
  }
}
