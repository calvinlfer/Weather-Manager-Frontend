import React, { Component } from 'react';
import { Navbar, Nav, NavItem } from 'react-bootstrap';

export default class App extends Component {
  navBarWithLogout() {
    return (
        <Navbar>
          <Navbar.Header>
            <Navbar.Brand>
              <a>Weather Manager</a>
            </Navbar.Brand>
          </Navbar.Header>
          <Nav>
            <NavItem eventKey={1} href="/login">Logout</NavItem>
          </Nav>
        </Navbar>
    );
  }

  navBarWithSignup() {
      return (
          <Navbar>
            <Navbar.Header>
              <Navbar.Brand>
                <a href="/">Weather Manager</a>
              </Navbar.Brand>
                <Navbar/>
            </Navbar.Header>
              <Nav>
                  <NavItem eventKey={1} href="/signup">Sign up</NavItem>
                  <NavItem eventKey={2} href="/forgotPassword">Forgot Password</NavItem>
                  <NavItem eventKey={3} href="/login">Login</NavItem>
              </Nav>
          </Navbar>
      );
  }

  render() {
    const path = this.props.location.pathname;
    if (path === '/weather') {
        return (
            <div>
                {this.navBarWithLogout()}
                {this.props.children}
            </div>
        );
    } else {
      return (
          <div>
              {this.navBarWithSignup()}
              {this.props.children}
          </div>
      )
    }
  }
}
