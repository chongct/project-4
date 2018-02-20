import React, { Component } from 'react'

import { Link } from 'react-router-dom';
// import { Grid, Row, Col, Image, Button} from 'reactstrap';
import { Grid, Row, Col, Image, Button} from 'react-bootstrap';
import '../styles/App.css';


class Home extends Component {
  render() {
    return (
      <div>
       <Row className="show-grid text-center">
        <h1 class="logo">TripCollab</h1>
        </Row>  

          <h2 class="main-text">Welcome!</h2>
          <h3 class="main-text">TripCollab can help to plan trip with your Friends</h3>

          <Grid>
          <Row className="show-grid text-center">
          <Col xs={12} sm={0} className="icon-wrapper" id="back-panel">
          </Col>

        
          <Col xs={12} sm={3} className="icon-wrapper">
            <Image src="assets/planning.svg" className="image-icon"/>
            <h4 class="icon-header">Easy Trip Planning</h4>
            <p>Able to quickly create and arrange itinerary.</p>
          </Col>

          <Col xs={12} sm={3} className="icon-wrapper">
            <Image src="assets/calendar.svg" className="image-icon"/>
            <h4 class="icon-header">Personalised Itinerary</h4>
            <p>Lorem ipsum dolor sit ame adipiscing elit.</p>
          </Col>

          <Col xs={12} sm={3} className="icon-wrapper">
            <Image src="assets/add-contact.svg" className="image-icon"/>
            <h4 class="icon-header">Seamless Collaboration</h4>
            <p>Lorem ipsum dolor sit ame adipiscing elit.</p>
          </Col>

          <Col xs={12} sm={3} className="icon-wrapper">
            <Image src="assets/offline.svg" className="image-icon"/>
            <h4 class="icon-header">Offline Access</h4>
            <p>Lorem ipsum dolor sit ame adipiscing elit..</p>
          </Col>


          <Link to="/Itinerary">
            <Button bsStyle="primary">Go</Button>
          </Link>

          </Row>
        </Grid>
      </div>
    )
  }
}
export default Home
