import React, { Component } from "react";
import Button from "./Button";
import { Link } from "react-router-dom";
import List from "../containers/List";

class OptionsPage extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <React.Fragment>
        <div>
          <h1>
            <Link to="/">Base</Link>
          </h1>
          <List />
        </div>

        <div>
          <h1>
            <Link to="/">Sauce</Link>
          </h1>
          <List />
        </div>

        <div>
          <h1>
            <Link to="/">Toppings</Link>
          </h1>
          <List />
        </div>
      </React.Fragment>
    );
  }
}

export default OptionsPage;
