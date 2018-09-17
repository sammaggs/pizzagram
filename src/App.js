import React, { Component } from 'react';
import './App.css';
import HomePage from './data/components/HomePage';
import {
  Route,
  Switch,
} from "react-router-dom";


class App extends Component {
  render() {
    return (
        <React.Fragment>
          <Route exact path="/" component={ HomePage }/>        
        </React.Fragment>
    );
  }
}

export default App;
