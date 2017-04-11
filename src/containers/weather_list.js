import React, { Component } from 'react';
import { connect } from 'react-redux';
import { browserHistory } from 'react-router';
import { bindActionCreators } from 'redux';
import { removeWeather, fetchWeather } from '../actions/weather';

class WeatherList extends Component {
    constructor(props) {
        super(props);
        this.renderWeather = this.renderWeather.bind(this);
    }

    renderWeather(data) {
        const name = data.name;
        const temperature = data.currentTemperature;
        const humidity = data.humidity;
        const id = data.id;
        return (
            <tr key={id}>
                <td>{name}</td>
                <td>{temperature}</td>
                <td>{humidity}</td>
                <td><button
                    type="button"
                    className="btn btn-danger"
                    onClick={() => this.props.removeWeather(id)}
                >Remove</button></td>
            </tr>
        )
    }

    componentWillMount() {
        if (!this.props.loggedIn) {
            browserHistory.push('/login');
        }
    }

    componentDidMount() {
        this.props.fetchWeather(this.props.jwtToken);
    }

    render() {
        return (
            <table className="table table-hover">
                <thead>
                <tr>
                    <th>City</th>
                    <th>Temperature (C)</th>
                    <th>Humidity (%)</th>
                    <th> </th>
                </tr>
                </thead>
                <tbody>
                {this.props.weather.map(this.renderWeather)}
                </tbody>
            </table>
        );
    }
}

function mapStateToProps(state) {
    return {
        weather: state.weather,
        jwtToken: state.authentication.jwtToken,
        loggedIn: state.authentication.loggedIn
    };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ removeWeather: removeWeather, fetchWeather: fetchWeather }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(WeatherList);