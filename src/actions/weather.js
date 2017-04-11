import axios from 'axios';

export const WEATHER_LIST = 'WEATHER_LIST';
export const REMOVE_WEATHER = 'REMOVE_WEATHER';

function weatherData(listOfWeather) {
    return {
        type: WEATHER_LIST,
        payload: listOfWeather
    }
}

export function fetchWeather(jwtToken) {
    return dispatch => {
        const url = 'http://localhost:9001/protected';
        const config = {headers: {Authorization: `Bearer ${jwtToken}`}};
        axios.get(url, config).then(response => dispatch(weatherData(response.data)));
    }
}

export function removeWeather(id) {
    return {
        type: REMOVE_WEATHER,
        payload: id
    }
}