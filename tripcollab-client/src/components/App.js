import React, { Component } from 'react';
// import logo from './logo.svg';
import '../styles/App.css';
import PlacesWithStandaloneSearchBox from './SearchBox';
import {  Table, Row,Panel, Button } from 'react-bootstrap';

class App extends Component {
  constructor() {
    super();
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

  render() {
    let locationList = this.state.locationList.map(location => <p key={location.locationID}>{location.locationName}, {location.locationAddress} at {location.latitude}, {location.longitude}</p>)

    return (
      <div className="App">
        <PlacesWithStandaloneSearchBox onAdd={this.addToList}/>
        <ol id="locationList"></ol>
        <Table responsive>
          <thead>
            <tr>
              <th></th>
              <th>
                Location Name
              </th>
              <th>
                Address
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                1
              </td>
              <td>
                GA Carpark
              </td>
              <td>
                8 Claymore Hill
              </td>
            </tr>
            <tr>
              <td>
                2
              </td>
              <td>
                Ebere House
              </td>
              <td>
                Tampines St 11 Blk 272
              </td>
            </tr>
            <tr>
              <td>
                3
              </td>
              <td>
                Some shithole
              </td>
              <td>
                14 D Scotts Road, #03-26/27
              </td>

            </tr>
          </tbody>
        </Table>


        {/* <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p> */}

        {/* this section retrieves saved locations from MongoDB, data can be manipulated */}
        <h2>Previously Saved Locations</h2>
        { locationList }
      </div>
    );
  }
}

export default App;
