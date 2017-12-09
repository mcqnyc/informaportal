import axios from 'axios';

/*
 * action types
 */

export const FETCH_WEATHER = 'FETCH_WEATHER';
export const FETCH_NEWS = 'FETCH_NEWS';

/*
 * other constants
 */

const API_KEY_WEATHER = 'de3292e2fdb344f395a181216170207';
const ROOT_URL_WEATHER = `https://api.apixu.com/v1/forecast.json?key=${API_KEY_WEATHER}`;
const API_KEY_NEWS = '7df519db-080e-4ab3-98fe-a36d60896d5c';
const ROOT_URL_NEWS = `https://content.guardianapis.com/search?section=`;
// const ROOT_URL_NEWS = `https://content.guardianapis.com/search?section=${searchTerm}&order-by=newest&page-size=50&q=business&api-key=${API_KEY_NEWS}`;


/*
 * action creators
 */


export function fetchWeather(city) {
  if (!city) {
    city = 'New York';
  }

  const url = `${ROOT_URL_WEATHER}&q=${city}&days=5`;
  const request = axios.get(url);

  console.log('request:', request);

  return {
    type: FETCH_WEATHER,
    payload: request,
  };
}



export function fetchNews(searchTerm) {
    // this.setState({ isLoading: true });
    
  // searchTerm = searchTerm || 'fashion';
  // console.log(searchTerm, 'searchTerm');

  const myInit = {
    method: 'GET',
    mode: 'cors',
    cache: 'default',
  };

  const url = `${ROOT_URL_NEWS}fashion&order-by=newest&page-size=50&q=business&api-key=${API_KEY_NEWS}`;
  const request = axios.get(url, myInit);

  console.log('!@#$ NEWS request:', request);

  return {
    type: FETCH_NEWS,
    payload: request,
  };
}
