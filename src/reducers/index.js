import { combineReducers } from 'redux';
import weatherReducer from './reducer_weather';
import authenticationReducer from './reducer_authentication';

const rootReducer = combineReducers({
    weather: weatherReducer,
    authentication: authenticationReducer
});

export default rootReducer;
