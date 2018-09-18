import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";
import pizzaImage from "../../images/pizzaHomePage.jpg";
import pizzaGram from "../../images/pizzagram.png";
import Button from "./Button";

class HomePage extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const homeContainer = {
      alignItems: "center",
    };

    const pizzaImageStyle = {
      textAlign: "center"
    }

    return (
      <Fragment>
        <div style={homeContainer}>
          <div>
            <img src={pizzaGram} />
          </div>

          <div>
            <img style={pizzaImageStyle} src={pizzaImage} />
          </div>

          <div>
            <Link className="btn btn-primary" to="/options">
              Build Your Own 🍕
            </Link>
            <Link className="btn btn-primary" to="/options">
              I'm Feeling Lucky 🍀
            </Link>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default HomePage;
