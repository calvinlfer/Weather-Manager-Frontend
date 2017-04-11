export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';

function loginSuccess() {
    return {
        type: LOGIN_SUCCESS
    };
}

export function loginUser(email, password) {
    return dispatch => {
        setTimeout(_ => dispatch(loginSuccess()), 2000);
    }
}