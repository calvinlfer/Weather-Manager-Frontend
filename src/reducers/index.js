import { combineReducers } from 'redux';
import weatherReducer from './reducer_weather';
import authenticationReducer from './reducer_authentication';
import signupReducer from './reducer_signup';

const rootReducer = combineReducers({
    weather: weatherReducer,
    authentication: authenticationReducer,
    signup: signupReducer
});

export default rootReducer;
