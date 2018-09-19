import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import reducer from "./reducers/reducer";

const ingredientData = require('./ingredients')

const initial = {
  data: ingredientData,
  pizzaChoices: {
    bases: [],
    sauce: [],
    toppings: []
  },
};

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  reducer,
  initial,
  composeEnhancers(applyMiddleware(thunk))
);

export default store;
