import React, { Component } from 'react'

import { Link } from 'react-router-dom'
import { Navbar, Nav, NavItem } from 'react-bootstrap'
import '../styles/App.css'

class Navmenu extends Component {
  render () {
    return (
      <Navbar inverse fixedTop>
        <Navbar.Header>
          <Navbar.Brand>
            <Link to='/'> TripCollab
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav pullRight>
            <NavItem
              eventKey={1}
              componentClass={Link}
              href='/'
              to='/'>
              About
            </NavItem>
            <NavItem
              eventKey={2}
              componentClass={Link}
              href='/itinerary'
              to='/itinerary'>
              Itinerary
            </NavItem>
            <NavItem
              eventKey={3}
              componentClass={Link}
              href='/loginsignup'
              to='/loginsignup'>
              Login / Signup
            </NavItem>
          </Nav>
        </Navbar.Collapse>
        <footer className='navbar-fixed-bottom'>
          <p>
            Copyright © 2018 <a href='https://github.com/chongct/project-4'><strong>TripCollab</strong></a>. All Rights Reserved.
          </p>
        </footer>
      </Navbar>
    )
  }
}

export default Navmenu
