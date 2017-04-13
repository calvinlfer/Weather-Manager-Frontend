import axios from 'axios';

export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';
export const SIGNUP_FAILURE = 'SIGNUP_FAILURE';
export const SIGNUP_SUCCESSFUL = 'SIGNUP_SUCCESSFUL';
export const RESET_FAILURE = 'RESET_FAILURE';
export const RESET_SUCCESSFUL = 'RESET_SUCCESSFUL';
export const RECOVER_FAILURE = 'RECOVER_FAILURE';
export const RECOVER_SUCCESSFUL = 'RECOVER_SUCCESSFUL';

const API_URL = 'http://localhost:9001';

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
        axios.post(API_URL + '/authenticate', {
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
        .catch(error => {
            if (!error.response) dispatch(loginFailure("Remote API is not ready yet"));
            else if (error.response.status === 400) dispatch(loginFailure(error.response.data));
            else dispatch(loginFailure(error.response.data.message));
        });
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
        axios.post(API_URL + '/signup', {
            email: email,
            password: password
        })
        .then(response => dispatch(successfulSignup("Success!")))
        .catch(error => {
            if (!error.response) dispatch(signupFailure("Remote API is not ready yet"));
            else if (error.response.status === 400) dispatch(signupFailure(error.response.data));
            else if (error.response.status === 409) dispatch(signupFailure("User with that email already exists"));
            else dispatch(signupFailure("Unable to sign up at this time, try again later"));
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
        axios.post(API_URL + '/reset', {email: email}, config)
            .then(response => dispatch(resetSuccessful()))
            .catch(error => {
                if (!error.response) dispatch(resetFailure("Remote API is not ready yet"));
                else dispatch(resetFailure(error.response.data.message))
            });
    }
}

function recoverFailure(message) {
    return {
        type: RECOVER_FAILURE,
        payload: message
    }
}

function recoverSuccessful() {
    return {
        type: RECOVER_SUCCESSFUL
    }
}

export function recover(recoveryCode, newPassword) {
    return dispatch => {
        const config = {timeout: 3000};
        axios.post(API_URL + '/recover', {resetCode: recoveryCode, newPassword: newPassword}, config)
            .then(response => dispatch(recoverSuccessful()))
            .catch(error => {
                if (!error.response) dispatch(recoverFailure("Remote API is not ready yet"));
                else dispatch(recoverFailure(error.response.data))
            });
    }
}