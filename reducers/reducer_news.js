import { FETCH_NEWS } from '../actions/action-creators';

export default function (state = [], action) {
  console.log('!@#$ NEWS action recvd', action);
  switch (action.type) {
    case FETCH_NEWS:
      if (response.ok) {

          // return response.json();
          return [ action.payload.data, ...state, console.log('FETCH_NEWS state : ',state)];
        }
        throw new Error('NEWS Network response was not ok.');
      // .then((response) => {
      //   return state.concat(response.response.results);
      // })
      // return [ action.payload.data, ...state, console.log('FETCH_NEWS state : ',state)];
    default:
      return state;
  }
}
