import React, { Component, Fragment } from "react";
import Button from "./Button";
import { Link } from "react-router-dom";
import List from "../containers/List";

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
          <List listType={"isBase"} />
        </div>

        <div>
          <h1>
            <Link to="/">Sauce</Link>
          </h1>
          <List listType={"isSauce"} />
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
