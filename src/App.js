import React, { Component } from 'react';
import './App.css';
import HomePage from './HomePage';
import {
  BrowserRouter as Router,
  Route,
} from "react-router-dom";

class App extends Component {
  render() {
    return (
      <Router>
        <React.Fragment>
          <Route exact path="/" component={ HomePage }/>        
        </React.Fragment>
      </Router>
    );
  }
}

export default App;
