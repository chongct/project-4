import React, { Component } from 'react'

import { Grid, Col, Image, NavItem, Nav, Tab, Row, Panel, Button, ListGroup, ListGroupItem} from 'react-bootstrap'
import '../styles/App.css'
// import Search from '../components/Search'

class Itinerary extends Component {
  render () {
    return (
      <Grid> 
       <Row className="show-grid">
        <Col md={6} mdPush={6}>
          <Panel class="location-list">
            <Panel.Heading>Location List</Panel.Heading>
              <ListGroup>
                <ListGroupItem>Takashimaya Department Store Singapore</ListGroupItem>
                <ListGroupItem>Paragon Shopping Centre Orchard Road</ListGroupItem>
                <ListGroupItem>Wisma Atria Singapore</ListGroupItem>
                <ListGroupItem>Plaza Singapura Singapore</ListGroupItem>
              </ListGroup>
            </Panel>
            <Button bsStyle="danger">Delete</Button>
        </Col>

        <Col md={6} mdPull={6}>
          <h4>Search for a Place<button>Add  Place</button></h4>
          <Image src='assets/map.jpg' className='map' />
        </Col>
        </Row>
      
        <Panel bsStyle='info'>
          <Panel.Heading>
            <Panel.Title componentClass='h3'>Current People Shared</Panel.Title>
          </Panel.Heading>
         
          <ListGroup>
            <ListGroupItem>Albert</ListGroupItem>
            <ListGroupItem>Brenda</ListGroupItem>
          </ListGroup>
        </Panel>

        <Tab.Container id='tabs-with-dropdown' defaultActiveKey='first'>
          <Row className='clearfix'>
            <Col sm={12}>
              <Nav bsStyle='tabs'>
                <NavItem eventKey='first'>Day 1</NavItem>
                <NavItem eventKey='second'>Day 2</NavItem>
                <NavItem eventKey='third'>Add</NavItem>
              </Nav>
            </Col>

            <Col sm={12}>
            <Tab.Content animation>
              <Tab.Pane eventKey='first'>
              </Tab.Pane>
              <Tab.Pane eventKey='second'>
              </Tab.Pane>
            </Tab.Content>
            </Col>
          </Row>
        </Tab.Container>    
      </Grid>

    )
  }
}

export default Itinerary
