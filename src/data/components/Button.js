import React from "react";

const Button = ({ buttonText, onClick } ) => {

 return (
        <button 
            onClick={onClick} 
            className="btn btn-primary">
            {buttonText}
        </button>
    )
};

export default Button;