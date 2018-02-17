import React, { Component } from 'react'

import { Grid, Col, Image, Table, TabContainer, NavItem, Nav, Tab, Row, NavDropdown, MenuItem, Panel, Button, ListGroup, ListGroupItem } from 'react-bootstrap'
import '../styles/App.css'

class Itinerary extends Component {
  render () {
    return (
      <Grid>
        <div>
          <Image src='assets/map.jpg' className='map' />
        </div>
        <Table responsive>
          <thead>
            <tr>
              <th></th>
              <th>
                Locations
              </th>
              <th>
                Distance
              </th>
              <th>
                Time
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                1
              </td>
              <td>
                Yohotel
              </td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td>
                2
              </td>
              <td>
                Marina Bay Sands
              </td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td>
                3
              </td>
              <td>
                Suntec City
              </td>
              <td></td>
              <td></td>
            </tr>
          </tbody>
        </Table>
        <Panel bsStyle='info'>
          <Panel.Heading>
            <Panel.Title componentClass='h3'>
              Current People Shared
            </Panel.Title>
          </Panel.Heading>
          <ListGroup>
            <ListGroupItem>
              Albert
            </ListGroupItem>
            <ListGroupItem>
              Brenda
            </ListGroupItem>
          </ListGroup>
        </Panel>
        <Tab.Container id='tabs-with-dropdown' defaultActiveKey='first'>
          <Row className='clearfix'>
            <Col sm={12}>
            <Nav bsStyle='tabs'>
              <NavItem eventKey='first'>
                Day 1
              </NavItem>
              <NavItem eventKey='second'>
                Day 2
              </NavItem>
              <NavItem eventKey='third'>
                +
              </NavItem>
              <NavItem eventKey='overview'>
                Overview
              </NavItem>
            </Nav>
            </Col>
            <Col sm={12}>
            <Tab.Content animation>
              <Tab.Pane eventKey='first'>
                Day 1: 26 Feb 2018, Mon
              </Tab.Pane>
              <Tab.Pane eventKey='second'>
                Day 2: 27 Feb 2018, Tue
              </Tab.Pane>
            </Tab.Content>
            </Col>
          </Row>
        </Tab.Container>
        <Table responsive>
          <thead>
            <tr>
              <th>
                Day 1: 26 Feb 2018, Mon
              </th>
              <th>
                City: Singapore
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                1000-1100hrs
              </td>
              <td>
                Brunch
              </td>
            </tr>
            <tr>
              <td>
                1200-1400hrs
              </td>
              <td>
                Shopping @ Orchard Road
              </td>
            </tr>
            <tr>
              <td>
                1500-1700hrs
              </td>
              <td>
                Marina Bay Sands
              </td>
            </tr>
          </tbody>
        </Table>
      </Grid>

    )
  }
}

export default Itinerary
