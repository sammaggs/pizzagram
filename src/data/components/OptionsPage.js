import React, { Component, Fragment } from "react";
import Button from "./Button";
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
      optionExpandedTopping: false,

    };
    this.clickExpandSauce = this.clickExpandSauce.bind(this);
    this.clickExpandBase = this.clickExpandBase.bind(this);
    this.clickExpandTopping = this.clickExpandTopping.bind(this);
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

  clickExpandTopping() {
    this.setState({
      optionExpandedTopping: !this.state.optionExpandedTopping
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
            <h1 style={{ background: "green" }}>
              <Button buttonText={"Base"} onClick={this.clickExpandBase} />
            </h1>

              <img
                style={{
                  width: "100px",
                  border: "2px solid #b0b0b0",
                  borderRadius: "100px",
                }}
                src={baseOptions}
              />

            {this.state.optionExpandedBase ? (
              <div>
                <List listType={"isBase"} />
              </div>
            ) : null}
          </div>

          <div>
            <h1>
              <Button buttonText={"Sauce"} onClick={this.clickExpandSauce} />
            </h1>
            <img
                style={{
                  width: "100px",
                  border: "2px solid #b0b0b0",
                  borderRadius: "100px",
                }}
                src={sauceOptions}
              />
            {this.state.optionExpandedSauce ? (
              <div>
                <List listType={"isSauce"} />
              </div>
            ) : null}
          </div>

          <div>
            <h1 style={{ background: "red" }}>
              <Button buttonText={"Topping"} onClick={this.clickExpandTopping} />
            </h1>
            <img
                style={{
                  width: "100px",
                  border: "2px solid #b0b0b0",
                  borderRadius: "100px",
                }}
                src={toppingOptions}
              />
            {this.state.optionExpandedTopping ? (
              <div>
                <List listType={"isTopping"} />
              </div>
            ) : null}
          </div>


          <Button buttonText={"I'm Done!"} />
        </div>
      </Fragment>
    );
  }
}

export default OptionsPage;
