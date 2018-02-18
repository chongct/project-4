import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import PlacesWithStandaloneSearchBox from './SearchBox';
import update from 'immutability-helper'
import { DragDropContext } from 'react-dnd'
import HTML5Backend from 'react-dnd-html5-backend'
import Location from './Location'

class App extends Component {
  constructor(props) {
    super(props);
    this.moveCard = this.moveCard.bind(this)
    this.state = {
      locationList: []
    };
  }

  addToList = async ({ place_id, formatted_address, name, geometry: { location } }) => {
    // display on React client
    var node = document.createElement("LI");
    var textnode = document.createTextNode(`${name}, ${formatted_address} at ${location.lat()}, ${location.lng()}`);
    node.appendChild(textnode);
    document.getElementById("locationList").appendChild(node);

    // write to Express server
    var params = {
      id: place_id,
      name: name,
      address: formatted_address,
      latitude: location.lat(),
      longitude: location.lng()
    };
    console.log(params);
    let response = await fetch('/location/new', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(params)
    });
  };

  retrieveFromList = async () => {
    const response = await fetch('/location/getAllForTrip');
    const body = await response.json();
    if (response.status !== 200) throw Error(body.message);
    this.setState({ locationList: body });
  };

  componentDidMount() {
    this.retrieveFromList();
  }

  // DnD Stuff

  moveCard(dragIndex, hoverIndex) {
    const { locationList } = this.state
    const dragCard = locationList[dragIndex]
    // console.log(locationList)
    this.setState(
      update(this.state, {
        locationList: {
          $splice: [[dragIndex, 1], [hoverIndex, 0, dragCard]]
        }
      })
    )
  }

  render() {
    let locationList = this.state.locationList.map((location, i) => <Location {...location} key={location.locationID} id={location.locationID} moveCard={this.moveCard} index={i} />)

    return (
      <div className="App">
        {/* <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p> */}
        <PlacesWithStandaloneSearchBox onAdd={this.addToList}/>
        <ol id="locationList"></ol>

        {/* this section retrieves saved locations from MongoDB, data can be manipulated */}
        <h2>Previously Saved Locations</h2>
        { locationList }
      </div>
    );
  }
}

export default DragDropContext(HTML5Backend)(App);
