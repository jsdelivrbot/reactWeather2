import axios from 'axios';

const API_KEY = 'ad394688ef8889ac657677ba5290decb';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';


export function fetchWeather(city) {
    const url = `${ROOT_URL}&q=${city},ltu&units=metric`;
    const request = axios.get(url);

    
    return {
        type: FETCH_WEATHER,
        payload: request
    };
}