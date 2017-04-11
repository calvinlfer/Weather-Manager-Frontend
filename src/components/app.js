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

  navBar() {
      return (
          <Navbar>
            <Navbar.Header>
              <Navbar.Brand>
                <a href="/">Weather Manager</a>
              </Navbar.Brand>
            </Navbar.Header>
          </Navbar>
      );
  }

  render() {
    const path = this.props.location.pathname;
    if (path === '/login' || path === '/') {
        return (
            <div>
                {this.navBar()}
                {this.props.children}
            </div>
        );
    } else {
      return (
          <div>
              {this.navBarWithLogout()}
              {this.props.children}
          </div>
      )
    }
  }
}
