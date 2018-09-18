import React, { Component, Fragment } from "react";
import { Link } from 'react-router-dom';
import pizzaImage from "../../images/pizzaHomePage.jpg";
import pizzaGram from "../../images/pizzagram.png";
import Button from "./Button";


const homeStyle = {
  textAlign: 'center',
  justifyContent: 'center'
};

class HomePage extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Fragment>
        <div style={homeStyle}>
            <img src={pizzaGram} />
            <img src={pizzaImage} />
            <Link className="btn btn-primary" to="/options">Build Your Own 🍕</Link>
            <Link className="btn btn-primary" to="/options">I'm Feeling Lucky 🍀</Link>
        </div>
      </Fragment>
    );
  }
}

export default HomePage;
