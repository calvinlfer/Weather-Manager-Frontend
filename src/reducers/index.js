import { combineReducers } from 'redux';
import weatherReducer from './reducer_weather';
import authenticationReducer from './reducer_authentication';
import signupReducer from './reducer_signup';
import forgotPasswordReducer from './reducer_forgotpassword';

const rootReducer = combineReducers({
    weather: weatherReducer,
    authentication: authenticationReducer,
    signup: signupReducer,
    forgotPassword: forgotPasswordReducer
});

export default rootReducer;
