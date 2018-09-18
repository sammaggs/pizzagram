import React, { Component, Fragment } from 'react';
import './App.css';
import HomePage from './data/components/HomePage';
import {
  Route,
  Switch,
} from "react-router-dom";
import OptionsPage from './data/components/OptionsPage';


class App extends Component {
  render() {
    return (
        <Fragment>
          <Route exact path="/" component={ HomePage } />
          <Route exact path="/options" component={ OptionsPage } />
        </Fragment>
    );
  }
}

export default App;