import React, { Component, Fragment } from "react";
import { Link } from 'react-router-dom';
import pizzaImage from "../../images/pizzaHomePage.jpg";
import pizzaGram from "../../images/pizzagram.png";
import Button from "./Button";

class HomePage extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Fragment>
        <div>
            <img src={pizzaGram} />
            <img src={pizzaImage} />
            <Button buttonText={"Build Your Own 🍕"} />
            <Button buttonText={"I'm Feeling Lucky 🍀"} />
        </div>
      </Fragment>
    );
  }
}

export default HomePage;
