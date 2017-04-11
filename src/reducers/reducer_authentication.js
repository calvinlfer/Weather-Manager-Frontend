import {LOGIN_SUCCESS} from '../actions/auth';

const initialState = {
    loggedIn: false,
    jwtToken: null
};

export default function (currentState = initialState, incomingAction) {
    switch (incomingAction.type) {
        case LOGIN_SUCCESS:
            return Object.assign({}, currentState, { loggedIn: true });
    }

    return currentState;
}