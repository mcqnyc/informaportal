import axios from 'axios';

const API_KEY = 'de3292e2fdb344f395a181216170207';
const ROOT_URL = `https://api.apixu.com/v1/forecast.json?key=${API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city) {
  const url = `${ROOT_URL}&q=${city}&days=5`;
  const request = axios.get(url);

  console.log('request:', request);

  return {
    type: FETCH_WEATHER,
    payload: request,
  };
}
