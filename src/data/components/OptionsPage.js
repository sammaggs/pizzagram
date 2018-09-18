import React, { Component, Fragment } from "react";
import Button from "./Button";
import { Link } from "react-router-dom";
import baseOptions from "../../images/base.jpg";
import sauceOptions from "../../images/sauces.jpg";
import toppingOptions from "../../images/ingredients.jpg";
import List from "../containers/List";


class OptionsPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      optionExpandedSauce: false,
      optionExpandedBase: false,
    };
    this.clickExpandSauce = this.clickExpandSauce.bind(this);
    this.clickExpandBase = this.clickExpandBase.bind(this);
  }

  clickExpandSauce() {
    this.setState({
      optionExpandedSauce: !this.state.optionExpandedSauce
    });
  }

  clickExpandBase() {
    this.setState({
      optionExpandedBase: !this.state.optionExpandedBase
    });
  }

  render() {
    const optionsStyle = {
      textAlign: "center",
      justifyContent: "center"
    };

    return (
      <Fragment>
        <div style={optionsStyle}>
          <div>
            <h1
              style={{
                height: "150px",
                background: "green"
              }}
            >
              <Button buttonText={"Base"} onClick={this.clickExpandBase} />
              <img
                style={{
                  width: "200px",
                  border: "2px solid #b0b0b0",
                  borderRadius: "100px",
                  float: "right"
                }}
                src={baseOptions}
              />
            </h1>
            {this.state.optionExpandedBase ? (
              <div>
                <List listType={"isBase"} />
              </div>
            ) : null}
          </div>

          <div>
          <img
                style={{
                  width: "200px",
                  border: "2px solid #b0b0b0",
                  borderRadius: "100px",
                  float: "right"
                }}
                src={sauceOptions}
              />
            <h1 style={{ height: "150px" }}>
              <Button buttonText={"Sauce"} onClick={this.clickExpandSauce} />
            </h1>
            {this.state.optionExpandedSauce ? (
              <div>
                <List listType={"isSauce"} />
              </div>
            ) : null}
          </div>

          <div>
            <h1
              style={{
                height: "150px",
                background: "red"
              }}
            >
              <Link to="/">Toppings</Link>
              <img
                style={{
                  width: "200px",
                  border: "2px solid #b0b0b0",
                  borderRadius: "100px",
                  float: "right"
                }}
                src={toppingOptions}
              />
            </h1>
            {/* <img src={pizzaTopping} /> */}
          </div>
          <Button buttonText={"I'm Done!"} />
        </div>
      </Fragment>
    );
  }
}

export default OptionsPage;
