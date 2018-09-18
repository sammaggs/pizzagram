import React, { Component, Fragment } from "react";
import Button from "./Button";
import { Link } from "react-router-dom";
// import pizzaSauce from '../../images/pizza-sauce.jpg';
import pizzaTopping from '../../images/pizza-toppings.jpg';

class OptionsPage extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Fragment>
        <div>
          <h1>
            <Link to="/">Base</Link>
          </h1>
        </div>

        <div>
          <h1>
            <Link to="/">Sauce</Link>
            {/* <img src={pizzaSauce} /> */}
          </h1>
        </div>

        <div>
          <h1>
            <Link to="/">Toppings</Link>
            <img src={pizzaTopping} />
          </h1>
        </div>
        <Button buttonText={"Done"}/>
      </Fragment>
    );
  }
}

export default OptionsPage;
