import React, { Component } from 'react';
import logo from '../logo.svg';
import '../styles/App.css';
import LinkList from './LinkList'
import { Navbar, Jumbotron, Button } from 'react-bootstrap';


class App extends Component {
  render() {
    return (
      <div>
        <Navbar inverse fixedTop>
          <Navbar.Header>
            <Navbar.Brand>
              <a href="/">TripCollab</a>
            </Navbar.Brand>
            <Navbar.Toggle />
          </Navbar.Header>
        </Navbar>

        <Jumbotron>
          <h1>MAP</h1>
          <p>
            <Button
              bsStyle="success"
              bsSize="large"
              href="#"
              target="_blank">
              Share Link
            </Button>
          </p>
        </Jumbotron>

      <div id="root">
        <p>Copyright 2018 <a href="https://github.com/chongct/project-4">TripCollab</a> . All Rights Reserved.</p>
      </div>

    </div>
    )
  }
}

export default App
