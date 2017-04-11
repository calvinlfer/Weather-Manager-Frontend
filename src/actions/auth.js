import axios from 'axios';

export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';

function loginSuccess(token) {
    return {
        type: LOGIN_SUCCESS,
        payload: token
    };
}

function loginFailure(message) {
    return {
        type: LOGIN_FAILURE,
        payload: message
    }
}

export function loginUser(email, password) {
    return dispatch => {
        axios.post('http://localhost:9001/authenticate', {
            email: email,
            password: password
        })
        .then(response => {
            if (response.status != 200) {
                dispatch(loginFailure("Unable to login, try again later"));
            } else {
                dispatch(loginSuccess(response.data.accessToken));
            }
        })
        .catch(error => dispatch(loginFailure(error.response.data.message)));
    }
}