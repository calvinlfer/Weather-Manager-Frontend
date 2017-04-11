import React, { Component } from 'react';
import AutoCompleteSearchBar from '../containers/search_bar';
import WeatherList from '../containers/weather_list';

export default class Weather extends Component {
    render() {
        return (
            <div>
                <AutoCompleteSearchBar />
                <WeatherList />
            </div>
        );
    }
}