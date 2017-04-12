import axios from 'axios';

export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';
export const SIGNUP_FAILURE = 'SIGNUP_FAILURE';
export const SIGNUP_SUCCESSFUL = 'SIGNUP_SUCCESSFUL';
export const RESET_FAILURE = 'RESET_FAILURE';
export const RESET_SUCCESSFUL = 'RESET_SUCCESSFUL';

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
            if (response.status !== 200) {
                dispatch(loginFailure("Unable to login, try again later"));
            } else {
                dispatch(loginSuccess(response.data.accessToken));
            }
        })
        .catch(error => dispatch(loginFailure(error.response.data.message)));
    }
}

function signupFailure(message) {
    return {
        type: SIGNUP_FAILURE,
        payload: message
    }
}

function successfulSignup(message) {
    return {
        type: SIGNUP_SUCCESSFUL,
        payload: message
    }
}

export function signUp(email, password) {
    return dispatch => {
        axios.post('http://localhost:9001/signup', {
            email: email,
            password: password
        })
        .then(response => dispatch(successfulSignup("Success!")))
        .catch(error => {
            if (error.response.status === 409) {
                dispatch(signupFailure("User with that email already exists"))
            } else {
                dispatch(signupFailure("Unable to sign up at this time, try again later"))
            }
        })
    }
}

function resetFailure(message) {
    return {
        type: RESET_FAILURE,
        payload: message
    }
}

function resetSuccessful() {
    return {
        type: RESET_SUCCESSFUL
    }
}

export function forgotPassword(email) {
    return dispatch => {
        const config = {timeout: 5000};
        axios.post('http://localhost:9001/reset', {email: email}, config)
            .then(response => dispatch(resetSuccessful()))
            .catch(error => {
                console.log(error.response);
                dispatch(resetFailure(error.response.data.message))
            });
    }
}