import axios from "axios";

const API_KEY = "9e6d04b1d460d034ad1da000ea28e448";
const ROOT_URL = "http://api.openweathermap.org/data/2.5/forecast?appid=" + API_KEY;


export const FETCH_WEATHER = "FETCH_WEATHER";

export function fetchWeather(city) {
  const url = ROOT_URL + "&q=" + city + ",US";
  const request = axios.get(url);

  return {
    type: FETCH_WEATHER,
    payload: request
  };
}

// Application state holds all the data of the application.

// Action creators return objects that have type.
