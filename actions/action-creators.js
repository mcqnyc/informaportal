import axios from 'axios';

const API_KEY = 'de3292e2fdb344f395a181216170207';
const ROOT_URL = `https://api.apixu.com/v1/forecast.json?key=${API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city) {
  if (!city) {
    city = 'New York';
  }

  const url = `${ROOT_URL}&q=${city}&days=5`;
  const request = axios.get(url);

  console.log('request:', request);

  return {
    type: FETCH_WEATHER,
    payload: request,
  };
}



const API_KEY_NEWS = '7df519db-080e-4ab3-98fe-a36d60896d5c';
const ROOT_URL_NEWS = `https://content.guardianapis.com/search?section=fashion&order-by=newest&page-size=50&q=business&api-key=${API_KEY_NEWS}`;

export const FETCH_NEWS = 'FETCH_NEWS';

export function fetchNews(city) {
    // this.setState({ isLoading: true });

  const myInit = {
    method: 'GET',
    mode: 'cors',
    cache: 'default',
  };

  const url = `${ROOT_URL_NEWS}`;
  const request = axios.get(url, myInit);

  console.log('!@#$ NEWS request:', request);

  return {
    type: FETCH_NEWS,
    payload: request,
  };
}


// Stock quotes API action creator is below

// const API_KEY_STOCKS = '0549eabf300590e088cf25b85572bbfe';
// const ROOT_URL_STOCKS = `https://marketdata.websol.barchart.com/getQuote.json?key=${API_KEY_STOCKS}`;

// export const FETCH_STOCKS = 'FETCH_STOCKS';

// export function fetchStocks(stockQuery) {
//   if (!stockQuery) {
//     stockQuery = 'AAPL,IBM,GOOGL';
//   }

//   const url = `${ROOT_URL_STOCKS}&symbols=${stockQuery}`;
//   const request = axios.get(url);

//   console.log('request:', request);

//   return {
//     type: FETCH_STOCKS,
//     payload: request,
//   };
// }

// Stock quotes API action creator is above ^^^
