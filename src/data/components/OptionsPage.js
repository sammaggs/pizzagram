import React, { Component } from "react";
import Button from "./Button";
import { Link } from "react-router-dom";

class OptionsPage extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <React.Fragment>
        <div>
            <h1>Base</h1>
        </div>

        <div>
            <h1>Sauce</h1>
        </div>

        <div>
            <h1>Toppings</h1>
        </div>
      </React.Fragment>
    );
  }
}

export default OptionsPage;
