import React, { Component } from 'react'

import { Link } from 'react-router-dom';
import { Grid, Row, Col, Image, Button } from 'react-bootstrap';
import '../styles/App.css';

class Home extends Component {
  render() {
    return (
      <Grid> 
        <div class="about">
          <h2>Welcome</h2>
          <h3>Your Trip With Friends</h3>

          <Row className="show-grid text-center">
          <Col xs={12} sm={3} className="icon-wrapper">
            <Image src="assets/planning.svg" className="icon"/>
            <h4>Easy Trip Planning</h4>
            <p>Able to quickly create and arrange itinerary.</p>
          </Col>

          <Col xs={12} sm={3} className="icon-wrapper">
            <Image src="assets/calendar.svg" className="icon"/>
            <h4>Personalised Itinerary</h4>
            <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.</p>
          </Col>

          <Col xs={12} sm={3} className="icon-wrapper">
            <Image src="assets/add-contact.svg" className="icon"/>
            <h4>Seamless Collaboration</h4>
            <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.</p>
          </Col>

          <Col xs={12} sm={3} className="icon-wrapper">
            <Image src="assets/offline.svg" className="icon"/>
            <h4>Offline Access</h4>
            <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.</p>
          </Col>
        </Row>
      
          <Link to="/Itinerary">
            <Button bsStyle="primary">Create Itinerary</Button>
          </Link>
        </div>
      </Grid>
    )
  }
}
export default Home