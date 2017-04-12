import {SIGNUP_FAILURE, SIGNUP_SUCCESSFUL} from '../actions/auth';

const initialState = {
    successful: false,
    error: false,
    message: null
};

export default function (currentState = initialState, incomingAction) {
    switch (incomingAction.type) {
        case SIGNUP_FAILURE:
            return {error: true, message: incomingAction.payload};

        case SIGNUP_SUCCESSFUL:
            return {error: false, message: null, successful: true}
    }

    return currentState;
}