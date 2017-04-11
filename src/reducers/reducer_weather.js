import { WEATHER, WEATHER_LIST, REMOVE_WEATHER } from '../actions/weather';

export default function (currentState = [], incomingAction) {
    switch (incomingAction.type) {
        case WEATHER_LIST:
            // do not wipe existing state, add on to it
            return (incomingAction.payload).concat(currentState);

        case WEATHER:
            // single piece weather
            return [incomingAction.payload].concat(currentState);

        case REMOVE_WEATHER:
            return currentState.filter(e => e.id !== incomingAction.payload);
    }

    return currentState;
}
