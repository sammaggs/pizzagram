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
    };

    const buttonStyle = {
      display: 'flex',
      justifyContent: "center",
      margin: 10
    }

    const imgStyle = {
      display: 'block',
      margin: 'auto'
    }

    return (
      <Fragment>
        <div style={homeContainer}>
            <img src={pizzaGram} style={imgStyle} />
            <img style={imgStyle} src={pizzaImage} />
            <div style={buttonStyle}>
              <Link  style={buttonStyle} className="btn btn-primary" to="/options">
                Build Your Own 🍕
              </Link>
              <Link style={buttonStyle} className="btn btn-primary" to="/options">
                I'm Feeling Lucky 🍀
              </Link>
            </div>
        </div>
      </Fragment>
    );
  }
}

export default HomePage;
