import React, { Component } from 'react';
import Autocomplete from 'react-google-autocomplete';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { addWeather } from '../actions/weather';

class AutoCompleteSearchBar extends Component {
    constructor(props) {
        super(props);
        this.placeAction = this.placeAction.bind(this);

    }

    placeAction(place) {
        const longitude = place.geometry.location.lng();
        const latitude = place.geometry.location.lat();
        console.log(`Latitude: ${latitude}, Longitude: ${longitude}`);
        this.props.addWeather(this.props.jwtToken, latitude, longitude);
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
    return bindActionCreators({ addWeather: addWeather }, dispatch);
}

function mapStateToProps(state) {
    return {
        jwtToken: state.authentication.jwtToken
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AutoCompleteSearchBar);