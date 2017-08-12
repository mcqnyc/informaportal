import { combineReducers } from 'redux';
import WeatherReducer from './reducer_weather';
import NewsReducer from './reducer_news';
// import StocksReducer from './reducer_stocks';

const rootReducer = combineReducers({
  // state: (state = {}) => state
  weather: WeatherReducer,
  news: NewsReducer,
  // stocksData: StocksReducer,
});

export default rootReducer;
