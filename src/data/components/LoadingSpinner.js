import React from "react";

const pizzaLoaderStyle = {
    textAlign: "center",
    backgroundColor: "white",
    height: 400,
}

const pizzaImageStyle = {
    marginTop: 50
}

const LoadingSpinner = () => (
  <div style={pizzaLoaderStyle} >
      <img style={pizzaImageStyle} width="120" height="120" src="https://i0.wp.com/www.flamebakedpizza.co.uk/wp-content/uploads/2018/02/Preloader-1.gif?fit=120%2C120" className="attachment-full size-full" alt=""/>
  </div>
);

export default LoadingSpinner;
