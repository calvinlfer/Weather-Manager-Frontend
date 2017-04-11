import axios from 'axios';

export const WEATHER = 'WEATHER';
export const WEATHER_LIST = 'WEATHER_LIST';
export const REMOVE_WEATHER = 'REMOVE_WEATHER';

function weatherListData(listOfWeather) {
    return {
        type: WEATHER_LIST,
        payload: listOfWeather
    }
}

function weatherData(weather) {
    return {
        type: WEATHER,
        payload: weather
    }
}

export function fetchWeather(jwtToken) {
    return dispatch => {
        const url = 'http://localhost:9001/members/me/forecasts';
        const config = {headers: {Authorization: `Bearer ${jwtToken}`}};
        axios.get(url, config).then(response => dispatch(weatherListData(response.data)));
    }
}

export function addWeather(jwtToken, lat, lon) {
    return dispatch => {
        const url = 'http://localhost:9001/members/me/forecasts';
        const config = {headers: {Authorization: `Bearer ${jwtToken}`}};
        axios.post(url, {lat, lon}, config).then(response => dispatch(weatherData(response.data)))
    }
}

export function removeWeather(id) {
    return {
        type: REMOVE_WEATHER,
        payload: id
    }
}