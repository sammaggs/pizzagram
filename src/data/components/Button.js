import React from "react";

const Button = ({ buttonText, onClick } ) => {

    const buttonStyling = {
        width: 100,
    }

 return (
        <button style={buttonStyling} onClick={onClick} className="btn btn-primary">{buttonText}</button>
    )
};

export default Button;