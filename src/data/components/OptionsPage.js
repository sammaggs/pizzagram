import React, { Component, Fragment } from "react";
import Button from "./Button";
import { Link } from "react-router-dom";
// import pizzaSauce from '../../images/pizza-sauce.jpg';
// import pizzaTopping from '../../images/pizza-toppings.jpg';
import baseOptions from '../../images/base.jpg';
import sauceOptions from '../../images/sauces.jpg';
import toppingOptions from '../../images/ingredients.jpg';


class OptionsPage extends Component {
  constructor(props) {
    super(props);
    this.state ={
      optionExpanded: false,
    }
    this.clickExpand = this.clickExpand.bind(this)
  }
  clickExpand() {
    this.setState ({
      optionExpanded: !this.state.optionExpanded
    })
  }
  render() {

    const optionsStyle = {
      textAlign: 'center',
      justifyContent: 'center'
    };

    return (
      <Fragment>
        <div style={optionsStyle}>
        <div>
          <h1 style={{
            height: "150px",
            background: "green"
          }}>
            <button onClick={ this.clickExpand }>Base</button>
            <img style={{
              width: "200px",
              border: "2px solid #b0b0b0",
              borderRadius: "100px",
              float: "right"
            }} src={baseOptions} />
          </h1>
          { this.state.optionExpanded ? <p>list of options</p> : null }
        </div>

        <div>
          <h1 style={{ height: "150px" }}>
            <Link to="/">Sauce</Link>
            <img style={{
              width: "200px",
              border: "2px solid #b0b0b0",
              borderRadius: "100px",
              float: "right"
            }} src={sauceOptions} />
          </h1>
          {/* <img src={pizzaSauce} /> */}
        </div>

        <div>
          <h1 style={{
            height: "150px",
            background: "red"
          }}>
            <Link to="/">Toppings</Link>
            <img style={{
              width: "200px",
              border: "2px solid #b0b0b0",
              borderRadius: "100px",
              float: "right"
            }} src={toppingOptions} />
          </h1>
          {/* <img src={pizzaTopping} /> */}
        </div>
        <Button buttonText={"I'm Done!"}/>
        </div>
      </Fragment>
    );
  }
}

export default OptionsPage;
