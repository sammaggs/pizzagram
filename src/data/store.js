import { createStore, applyMiddleware, compose } from "redux";
import thunk from 'redux-thunk';

const initial = {};

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(firstReducer, initial, composeEnhancers(applyMiddleware(thunk)));

export default store;