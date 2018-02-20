import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';


import Navmenu from '../components/Navmenu';
import Home from '../components/Home';
import '../styles/App.css';


class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Navmenu />
          <Route exact path="/" component={Home} />
        </div>
      </Router>
    );
  }
}

export default App;
