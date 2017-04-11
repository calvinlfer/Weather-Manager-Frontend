import {LOGIN_SUCCESS, LOGIN_FAILURE} from '../actions/auth';

const initialState = {
    loggedIn: false,
    jwtToken: null,
    error: null
};

export default function (currentState = initialState, incomingAction) {
    switch (incomingAction.type) {
        case LOGIN_SUCCESS:
            return Object.assign({}, currentState, { loggedIn: true, jwtToken: incomingAction.payload, error: null });

        case LOGIN_FAILURE :
            return Object.assign({}, currentState, { loggedIn: false, jwtToken: null, error: incomingAction.payload})
    }

    return currentState;
}