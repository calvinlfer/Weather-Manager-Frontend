import { combineReducers } from 'redux';
import weatherReducer from './reducer_weather';
import authenticationReducer from './reducer_authentication';
import signupReducer from './reducer_signup';
import forgotPasswordReducer from './reducer_forgotpassword';
import recoveryReducer from './reducer_recovery';

const rootReducer = combineReducers({
    weather: weatherReducer,
    authentication: authenticationReducer,
    signup: signupReducer,
    forgotPassword: forgotPasswordReducer,
    recovery: recoveryReducer
});

export default rootReducer;
