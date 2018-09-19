import React from "react";
import '../../styles/css/App.css';

const Button = ({ buttonText, onClick, colourTheme } ) => {
    return (
        <button onClick={onClick} className={"btn btn-" + colourTheme}>{buttonText}</button>
    )
};

export default Button;