import React, {Component} from "react";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import {Alert} from 'react-bootstrap';
import {forgotPassword} from "../actions/auth";

class ForgotPasswordForm extends Component {
    constructor(props) {
        super(props);
        this.state = { email: ''};
        this.onUsernameChange = this.onUsernameChange.bind(this);
        this.onFormSubmit = this.onFormSubmit.bind(this);
    }

    onUsernameChange(event) {
        this.setState({email: event.target.value});
    }

    onFormSubmit(event) {
        event.preventDefault();
        const email = this.state.email;

        // dispatch login user action
        this.props.forgotPassword(email);

        // reset fields
        this.setState({email: ''});
    }

    errorAlert(errorMessage) {
        return (
            <Alert bsStyle="danger">{errorMessage}</Alert>
        );
    }

    successAlert(message) {
        return (
            <Alert bsStyle="success">{message}</Alert>
        );
    }

    render() {
        return(
            <div>
                <form
                    onSubmit={this.onFormSubmit}
                    className="form-signin">
                    <div className="container">
                        <h3 className="form-signin-heading">Forgot Password</h3>
                        <input
                            className="form-control"
                            placeholder="Enter your email and we will send a reset code"
                            type="email"
                            value={this.state.email}
                            onChange={this.onUsernameChange} />
                        <div className="input-group-btn">
                            <button type="submit" className="btn btn-lg btn-primary btn-block">Submit</button>
                        </div>
                    </div>
                </form>
                {this.props.error && this.errorAlert(this.props.message)}
                {this.props.resetSuccessful && this.successAlert("Check your email")}
            </div>
        );
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ forgotPassword: forgotPassword }, dispatch)
}

function mapStateToProps(state) {
    return {
        resetSuccessful: state.forgotPassword.successful,
        error: state.forgotPassword.error,
        message: state.forgotPassword.message
    };
}


export default connect(mapStateToProps, mapDispatchToProps)(ForgotPasswordForm);
