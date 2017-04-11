import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './components/app';
import Weather from './components/weather';
import LoginForm from './containers/login';

export default (
    <Route path="/" component={App}>
        <Route path="/weather" component={Weather}/>
        <Route path="/login" component={LoginForm} />
    </Route>
);