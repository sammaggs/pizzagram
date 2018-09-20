import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";
import pizzaImage from "../../images/pizzaHomePage.jpg";
import pizzaGram from "../../images/pizzagram.png";
import Button from "./Button";
import '../../styles/css/App.css';

class HomePage extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <main className="container d-flex flex-column flex-lg-row justify-content-around align-items-center">
        <div>
          <Link className="btn btn-primary btn-lg m-3" to="/options">
            Build Your Own <span role="img" aria-label="Pizza">🍕</span>
          </Link>
        </div>
        <div>
          <Link className="btn btn-success btn-lg m-3" to="/options">
            I'm Feeling Lucky <span role="img" aria-label="Four-leafed clover">🍀</span>
          </Link>
        </div>
      </main>
    );
  }
}

export default HomePage;
