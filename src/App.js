import React, { Component, Fragment } from 'react';
import './App.css';
import HomePage from './data/components/HomePage';
import {
  Route,
  Switch,
} from "react-router-dom";
import OptionsPage from './data/components/OptionsPage';
import FinishedPage from './data/components/FinishedPage';
import List from './data/containers/List';


class App extends Component {
  render() {
    return (
        <React.Fragment>
          <Route exact path="/" component={ HomePage } />
          <Route exact path="/options" component={ OptionsPage } />
          {/* <Route exact path="/options/:option" render={ ({ match }) => (<List option={ match.params.option }/> )} /> */}
          <Route exact path="/options/:finished" component={ FinishedPage } />
        </React.Fragment>
    );
  }
}

export default App;