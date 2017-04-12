import React, {Component} from "react";
import {connect} from "react-redux";
import {browserHistory} from 'react-router';
import {bindActionCreators} from "redux";
import {Alert} from 'react-bootstrap';
import {loginUser} from "../actions/auth";

class LoginForm extends Component {
    constructor(props) {
        super(props);
        this.state = { email: '', password: ''};
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

        // dispatch login user action
        this.props.loginUser(email, password);

        // reset fields
        this.setState({email: '', password: ''});
    }

    errorAlert(errorMessage) {
        return (
            <Alert bsStyle="danger">{errorMessage}</Alert>
        );
    }

    componentWillUpdate(nextProps, nextState) {
        if (nextProps.loggedIn) {
            browserHistory.push('/weather');
        }

        if (nextProps.error) {
            console.log("Error: " + nextProps.error);
        }
    }

    render() {
        return(
            <div>
                <form
                    onSubmit={this.onFormSubmit}
                    className="form-signin">
                    <div className="container">
                        <h3 className="form-signin-heading">Sign in</h3>
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
                {this.props.error && this.errorAlert(this.props.error)}
            </div>
        );
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ loginUser: loginUser }, dispatch)
}

function mapStateToProps(state) {
    return {
        loggedIn: state.authentication.loggedIn,
        error: state.authentication.error
    };
}


export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);
