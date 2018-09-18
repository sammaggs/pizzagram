import React, { Component, Fragment } from "react";
import Button from "./Button";
import { Link } from "react-router-dom";
<<<<<<< HEAD
import List from "../containers/List";
=======
// import pizzaSauce from '../../images/pizza-sauce.jpg';
// import pizzaTopping from '../../images/pizza-toppings.jpg';



>>>>>>> development

class OptionsPage extends Component {
  constructor(props) {
    super(props);
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
          <h1>
            <Link to="/">Base</Link>
          </h1>
          <List />
        </div>

        <div>
          <h1>
            <Link to="/">Sauce</Link>
          </h1>
          {/* <img src={pizzaSauce} /> */}
        </div>

        <div>
          <h1>
            <Link to="/">Toppings</Link>
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
