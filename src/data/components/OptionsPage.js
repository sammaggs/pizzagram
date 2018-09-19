import React, { Component, Fragment } from "react";
import Button from "./Button";
import baseOptions from "../../images/base.jpg";
import sauceOptions from "../../images/sauces.jpg";
import toppingOptions from "../../images/ingredients.jpg";
import { Link } from "react-router-dom";


class OptionsPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      optionExpandedSauce: false,
      optionExpandedBase: false,
      optionExpandedTopping: false,

    };
    // this.clickExpandSauce = this.clickExpandSauce.bind(this);
    // this.clickExpandBase = this.clickExpandBase.bind(this);
    // this.clickExpandTopping = this.clickExpandTopping.bind(this);
  }

  // clickExpandSauce() {
  //   this.setState({
  //     optionExpandedSauce: !this.state.optionExpandedSauce
  //   });
  // }

  // clickExpandBase() {
  //   this.setState({
  //     optionExpandedBase: !this.state.optionExpandedBase
  //   });
  // }

  // clickExpandTopping() {
  //   this.setState({
  //     optionExpandedTopping: !this.state.optionExpandedTopping
  //   });
  // }

  render() {
    const optionsStyle = {
      textAlign: "center",
      justifyContent: "center"
    };

    return (
      <Fragment>
        <div style={optionsStyle}>

          <div>
            <h1>
              <Link className="btn btn-primary" to="/options/bases">Bases</Link>
            </h1>
              <img
                style={{
                  width: "100px",
                  border: "2px solid #b0b0b0",
                  borderRadius: "100px",
                }}
                src={baseOptions}
              />
          </div>

          <div>
            <h1>
            <Link className="btn btn-primary" to="/options/sauce">Sauce</Link>
            </h1>
            <img
                style={{
                  width: "100px",
                  border: "2px solid #b0b0b0",
                  borderRadius: "100px",
                }}
                src={sauceOptions}
              />
          </div>

          <div>
            <h1>
              <Link className="btn btn-primary" to="/options/toppings">Toppings</Link>
            </h1>
            <img
                style={{
                  width: "100px",
                  border: "2px solid #b0b0b0",
                  borderRadius: "100px",
                }}
                src={toppingOptions}
              />
          </div>


        <Link className="btn btn-primary" to="/finished">I'm Done!</Link>
        </div>
      </Fragment>
    );
  }
}

export default OptionsPage;
