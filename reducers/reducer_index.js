import { combineReducers } from 'redux';
import WeatherReducer from './reducer_weather';
// import StocksReducer from './reducer_stocks';

const rootReducer = combineReducers({
  // state: (state = {}) => state
  weather: WeatherReducer,
  // stocksData: StocksReducer,
});

export default rootReducer;
