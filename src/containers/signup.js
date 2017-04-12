import React, {Component} from "react";
import {connect} from "react-redux";
import {browserHistory} from 'react-router';
import {bindActionCreators} from "redux";
import {signUp} from '../actions/auth';
import {Alert} from 'react-bootstrap';

class SignupForm extends Component {
    constructor(props) {
        super(props);
        this.state = { email: '', password: '', showModal: false };
        this.onUsernameChange = this.onUsernameChange.bind(this);
        this.onPasswordChange = this.onPasswordChange.bind(this);
        this.onFormSubmit = this.onFormSubmit.bind(this);
    }

    onUsernameChange(event) {
        this.setState({email: event.target.value});
    }

    onPasswordChange(event) {
        this.setState({password: event.target.value});
    }

    onFormSubmit(event) {
        event.preventDefault();
        const email = this.state.email;
        const password = this.state.password;

        // dispatch signup user action
        this.props.signUp(email, password);

        // reset fields
        this.setState({email: '', password: ''});
    }

    errorAlert(errorMessage) {
        return (
            <Alert bsStyle="danger">{errorMessage}</Alert>
        );
    }

    componentWillUpdate(nextProps, nextState) {
        if (nextProps.successful) {
            browserHistory.push('/login');
        }
    }

    render() {
        return(
            <div>
                <form
                    onSubmit={this.onFormSubmit}
                    className="form-signin">
                    <div className="container">
                        <h3 className="form-signin-heading">Sign up as a new user</h3>
                        <input
                            className="form-control"
                            placeholder="Enter your email"
                            type="email"
                            value={this.state.email}
                            onChange={this.onUsernameChange} />
                        <div>
                            <input
                                className="form-control"
                                placeholder="Enter your password"
                                value={this.state.password}
                                type="password"
                                onChange={this.onPasswordChange} />
                        </div>
                        <div className="input-group-btn">
                            <button type="submit" className="btn btn-lg btn-primary btn-block">Submit</button>
                        </div>
                    </div>
                </form>
                {this.props.error && this.errorAlert(this.props.message)}
            </div>
        );
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({signUp: signUp}, dispatch)
}

function mapStateToProps(state) {
    return {
        error: state.signup.error,
        message: state.signup.message,
        successful: state.signup.successful,
    };
}


export default connect(mapStateToProps, mapDispatchToProps)(SignupForm);