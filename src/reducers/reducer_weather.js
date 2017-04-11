import { FETCH_WEATHER, REMOVE_WEATHER } from '../actions/weather';

export default function (currentState = [], incomingAction) {
    switch (incomingAction.type) {
        case FETCH_WEATHER:
            // do not wipe existing state, add on to it
            return [incomingAction.payload.data].concat(currentState);

        case REMOVE_WEATHER:
            return currentState.filter(e => e.id !== incomingAction.payload);
    }

    return currentState;
}
