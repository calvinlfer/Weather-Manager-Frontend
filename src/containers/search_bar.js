import React, { Component } from 'react';
import Autocomplete from 'react-google-autocomplete';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchWeather } from '../actions/weather';

class AutoCompleteSearchBar extends Component {
    constructor(props) {
        super(props);
        this.placeAction = this.placeAction.bind(this);

    }

    placeAction(place) {
        const longitude = place.geometry.location.lng();
        const latitude = place.geometry.location.lat();
        console.log(`Latitude: ${latitude}, Longitude: ${longitude}`);
        this.props.fetchWeather(latitude, longitude);
    }

    render() {
        return (
            <Autocomplete
                placeholder="Enter a location"
                className="form-control"
                style={{width: '90%'}}
                onPlaceSelected={this.placeAction}
                types={['(regions)']}
                id="google-autocomplete-search-bar"
            />
        )
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ fetchWeather: fetchWeather }, dispatch);
}

export default connect(null, mapDispatchToProps)(AutoCompleteSearchBar);