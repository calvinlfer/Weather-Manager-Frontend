import React, { Component } from 'react';
import { browserHistory } from 'react-router'

export default class LoginForm extends Component {
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
        console.log(this.state.email);
        console.log(this.state.password);
        this.setState({email: '', password: ''});

        // navigate to weather regardless of response
        browserHistory.push('/weather');
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
            </div>
        );
    }
}
