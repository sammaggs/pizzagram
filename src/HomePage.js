import React, { Component } from "react";
import pizzaImage from "./images/pizzaHomePage.jpg";
import Button from "./Button";

class HomePage extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <React.Fragment>
        <img src={pizzaImage} />
        <Button buttonText={"Build"} />
        <Button buttonText={"Random"} />
      </React.Fragment>
    );
  }
}

export default HomePage;
