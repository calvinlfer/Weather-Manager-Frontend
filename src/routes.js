import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './components/app';
import Weather from './components/weather';
import LoginForm from './containers/login';
import SignupForm from './containers/signup';
import ResetForm from './containers/passwordreset';
import RecoverForm from './containers/passwordrecover';

export default (
    <Route path="/" component={App}>
        <IndexRoute component={LoginForm}/>
        <Route path="/weather" component={Weather}/>
        <Route path="/login" component={LoginForm} />
        <Route path="/signup" component={SignupForm} />
        <Route path="/forgotPassword" component={ResetForm}/>
        <Route path="/recover" component={RecoverForm}/>
    </Route>
);