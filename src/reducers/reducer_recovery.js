import {RECOVER_FAILURE, RECOVER_SUCCESSFUL} from '../actions/auth';

const initialState = {
    successful: false,
    error: false,
    message: null
};

export default function (currentState = initialState, incomingAction) {
    switch (incomingAction.type) {
        case RECOVER_FAILURE:
            return {error: true, message: incomingAction.payload, successful: false};

        case RECOVER_SUCCESSFUL:
            return {error: false, message: null, successful: true}
    }

    return currentState;
}