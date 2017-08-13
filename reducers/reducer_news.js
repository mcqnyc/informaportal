import { FETCH_NEWS } from '../actions/action-creators';

export default function (state = [], action) {
  console.log('NEWS !@#$ action recvd', action);
  switch (action.type) {
    case FETCH_NEWS:
      if (action.payload.status === 200) {
          return state.concat(action.payload.data.response.results);
          // return [ action.payload.data.response.results, ...state, console.log('FETCH_NEWS state : ',state)];
        }
    default:
      return state;
  }
}
