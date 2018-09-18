import React, { Component } from "react";
import Button from "./Button";
import { Link } from "react-router-dom";
// import pizzaSauce from '../../images/pizza-sauce.jpg';
// import pizzaTopping from '../../images/pizza-toppings.jpg';

// const imageStyling = {
//   borderRadius : 200
// }

class OptionsPage extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <React.Fragment>
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
            {/* <img style={imageStyling} src={pizzaTopping} /> */}
          </h1>
        </div>
        <Button buttonText={"Done"}/>
      </React.Fragment>
    );
  }
}

export default OptionsPage;
