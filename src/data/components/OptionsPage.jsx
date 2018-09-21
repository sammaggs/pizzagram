import React, { Component, Fragment } from "react";
import baseOptions from "../../images/base.jpg";
import sauceOptions from "../../images/sauces.jpg";
import toppingOptions from "../../images/ingredients.jpg";
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
    const optionsStyle = {
      textAlign: "center",
      justifyContent: "center"
    };

    return (
      <Fragment>
        <section style={optionsStyle}>

          <div className="card">
            <h1 className="card-header">Bases</h1>
            <div className="card-body">
              <img
                style={{
                  width: "100px",
                  border: "2px solid #b0b0b0",
                  borderRadius: "100px",
                }}
                src={baseOptions}
              />
              <Link className="btn btn-primary" to="/options/bases">Choose a base</Link>
            </div>
          </div>

          <div className="card">
            <h1 className="card-header">Sauce</h1>
            <div className="card-body">
              <img
                  style={{
                    width: "100px",
                    border: "2px solid #b0b0b0",
                    borderRadius: "100px",
                  }}
                  src={sauceOptions}
                />
              <Link className="btn btn-primary" to="/options/sauce">Choose a sauce</Link>
            </div>
          </div>

          <div className="card">
            <h1 className="card-header">Toppings</h1>
            <div className="card-body">
              <img
                  style={{
                    width: "100px",
                    border: "2px solid #b0b0b0",
                    borderRadius: "100px",
                  }}
                  src={toppingOptions}
                />
                <Link className="btn btn-primary" to="/options/toppings">Choose toppings</Link>
            </div>
          </div>

        <Link className="btn btn-success btn-lg" to="/finished">Done</Link>
        </section>
      </Fragment>
    );
  }
}

export default OptionsPage;
