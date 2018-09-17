import React, { Component } from "react";
import pizzaImage from './images/pizzaHomePage.jpg'

class HomePage extends Component {
  constructor(props) {
    super(props);
  }


  render() {

    
    return (
      <React.Fragment>
          <img src={pizzaImage}></img>
        
        
      </React.Fragment>
    );
  }
}

export default HomePage;
