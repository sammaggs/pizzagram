import React, { Component, Fragment } from 'react';
import './App.css';
import HomePage from './data/components/HomePage';
import {
  Route,
  Switch,
} from "react-router-dom";
import OptionsPage from './data/components/OptionsPage';
import FinishedPage from './data/containers/FinishedPage';
import List from './data/containers/List';
import FourOhFour from './data/components/FourOhFour';


class App extends Component {
  render() {
    return (
        <Fragment>
          <Switch>
            <Route exact path="/" component={ HomePage } />
            <Route exact path="/options" component={ OptionsPage } />
            <Route exact path="/options/:option" render={ ({ match }) => (<List option={ match.params.option }/> )} />
            <Route exact path="/finished" component={ FinishedPage } />
            <Route component={FourOhFour} />
          </Switch>
        </Fragment>
    );
  }
}

export default App;