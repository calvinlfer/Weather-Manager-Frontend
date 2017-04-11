import axios from 'axios';

const WEATHER_API_KEY = '6ffadf1b4c343f42d1d07cfee073541f';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/weather?appid=${WEATHER_API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';
export const REMOVE_WEATHER = 'REMOVE_WEATHER';

export function fetchWeather(lat, lng) {
    const url = `${ROOT_URL}&lat=${lat}&lon=${lng}&units=metric`;
    const request = axios.get(url);
    return {
        type: FETCH_WEATHER,
        payload: request
    };
}

export function fetchRealWeather(jwtToken) {
    return dispatch => {
        const url = 'http://localhost:9001/protected';
        const config = {headers: {Authorization: `Bearer ${jwtToken}`}};
        axios.get(url, config)
            .then(response => console.log(response.data));
    }
}

export function removeWeather(id) {
    return {
        type: REMOVE_WEATHER,
        payload: id
    }
}