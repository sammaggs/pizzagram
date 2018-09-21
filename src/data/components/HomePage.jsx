import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";
import pizzaImage from "../../images/pizzaHomePage.jpg";
import pizzaGram from "../../images/pizzagram.png";
// import Button from "./Button";
import Randomiser from './Randomiser';
import '../../styles/css/App.css';

class HomePage extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Fragment>
        <div className="container-fluid d-flex flex-column align-items-center">
            <img src={pizzaGram} />
            <img src={pizzaImage} />
            <div>
              <Link className="btn btn-primary btn-lg" to="/options">
                Build Your Own 🍕
              </Link>
            </div>
            <div>
              <Link className="btn btn-danger btn-sm" to="/options">
                I'm Feeling Lucky 🍀
              </Link>
              <Randomiser />
            </div>
        </div>
      </Fragment>
    );
  }
}

export default HomePage;
