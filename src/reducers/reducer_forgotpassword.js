import {RESET_FAILURE, RESET_SUCCESSFUL} from '../actions/auth';

const initialState = {
    successful: false,
    error: false,
    message: null
};

export default function (currentState = initialState, incomingAction) {
    switch (incomingAction.type) {
        case RESET_FAILURE:
            return {error: true, message: incomingAction.payload};

        case RESET_SUCCESSFUL:
            return {error: false, message: null, successful: true}
    }

    return currentState;
}