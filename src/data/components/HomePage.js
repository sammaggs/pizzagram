import React, { Component } from "react";
import pizzaImage from "../../images/pizzaHomePage.jpg";
import pizzaGram from "../../images/pizzagram.png";
import Button from "./Button";
import history   from '../../History';

class HomePage extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <React.Fragment>
        <div>
            <img src={pizzaGram} />
            <img src={pizzaImage} />
            <Button 
              onClick={() => { history.push('/options') }}
              buttonText={"Build Your Own 🍕"} 
              />
            <Button buttonText={"I'm Feeling Lucky 🍀"} />
        </div>
      </React.Fragment>
    );
  }
}


export default HomePage;
