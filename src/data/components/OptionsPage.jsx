import React, { Component, Fragment } from "react";
import Button from "./Button";
import baseOptions from "../../images/pizza-dough.jpg";
import sauceOptions from "../../images/pizza-sauce.jpg";
import toppingOptions from "../../images/pizza-toppings.jpg";
import { Link } from "react-router-dom";
import '../../styles/css/App.css';


class OptionsPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      optionExpandedSauce: false,
      optionExpandedBase: false,
      optionExpandedTopping: false,
    };
  }

  render() {
    return (
      <Fragment>
        <section className="d-flex flex-column align-items-center container">
          <div className="d-flex flex-column flex-lg-row align-items-center text-center text-light card-deck">

            <div className="card d-flex flex-column justify-content-center align-middle m-3 border-0">
              <img
                src={baseOptions}
                className="card-img"
                alt="Pizza base"
              />
              <div className="card-img-overlay">
                <h2 className="card-title">Bases</h2>
                <Link className="btn btn-primary" to="/options/bases">Choose a base</Link>
              </div>
            </div>

            <div className="card d-flex flex-column justify-content-center align-middle m-3 border-0">
              <img
                  src={sauceOptions}
                  className="card-img-top"
                  alt="Pizza sauce"
              />
              <div className="card-img-overlay">
                <h2 className="card-title">Sauce</h2>
                <Link className="btn btn-primary" to="/options/sauce">Choose a sauce</Link>
              </div>
            </div>

            <div className="card d-flex flex-column justify-content-center align-middle m-3 border-0">
              <img
                  src={toppingOptions}
                  className="card-img-top"
                  alt="Pizza toppings"
              />
              <div className="card-img-overlay">
                <h2 className="card-title">Toppings</h2>
                  <Link className="btn btn-primary" to="/options/toppings">Choose toppings</Link>
              </div>

            </div>
          </div>
        <Link className="btn btn-success btn-lg w-100 m-3" to="/finished">Done</Link>
        </section>
      </Fragment>
    );
  }
}

export default OptionsPage;
