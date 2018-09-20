import React from "react";
import '../../styles/css/App.css';

const Button = ({ buttonText, onClick, colourTheme, isBlock } ) => {
    return (
        <button onClick={onClick} className={"btn btn-" + colourTheme + (isBlock ? " btn-block" : null)}>{buttonText}</button>
    )
};

export default Button;