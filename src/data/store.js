import { createStore, applyMiddleware, compose } from "redux";
import thunk from 'redux-thunk';
import reducer from './reducers/reducer';

const initial = {
    1: {
        id: 1,
        ingredient: "tomato",
    },
    2: {
        id: 2,
        ingredient: "mozzarella",
    }
};

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducer, initial, composeEnhancers(applyMiddleware(thunk)));

export default store;