import React, {Component} from "react";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import {Alert} from 'react-bootstrap';
import {recover} from "../actions/auth";

class RecoverForm extends Component {
    constructor(props) {
        super(props);
        this.state = { recoveryCode: '', newPassword: ''};
        this.onRecoveryCodeChange = this.onRecoveryCodeChange.bind(this);
        this.onNewPasswordChange = this.onNewPasswordChange.bind(this);
        this.onFormSubmit = this.onFormSubmit.bind(this);
    }

    onRecoveryCodeChange(event) {
        this.setState({recoveryCode: event.target.value});
    }

    onNewPasswordChange(event) {
        this.setState({newPassword: event.target.value});
    }

    onFormSubmit(event) {
        event.preventDefault();
        const recoveryCode = this.state.recoveryCode;
        const password = this.state.newPassword;

        // dispatch recover action
        this.props.recover(recoveryCode, password);

        // reset fields
        this.setState({recoveryCode: '', newPassword: ''});
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
                        <h3 className="form-signin-heading">Reset your password</h3>
                        <input
                            className="form-control"
                            placeholder="Recovery Code"
                            value={this.state.recoveryCode}
                            onChange={this.onRecoveryCodeChange} />
                        <div>
                            <input
                                className="form-control"
                                placeholder="Enter your new password"
                                value={this.state.newPassword}
                                type="password"
                                onChange={this.onNewPasswordChange} />
                        </div>
                        <div className="input-group-btn">
                            <button type="submit" className="btn btn-lg btn-primary btn-block">Submit</button>
                        </div>
                    </div>
                </form>
                {this.props.error && this.errorAlert(this.props.message)}
                {this.props.recoverSuccessful && this.successAlert("Password has been changed")}
            </div>
        );
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({recover}, dispatch)
}

function mapStateToProps(state) {
    return {
        recoverSuccessful: state.recovery.successful,
        error: state.recovery.error,
        message: state.recovery.message
    };
}


export default connect(mapStateToProps, mapDispatchToProps)(RecoverForm);
