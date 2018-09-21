import React from "react";

const Button = ({ buttonText, onClick, colourTheme, isBlock } ) => {
    return (
        <button onClick={onClick} className={"btn btn-" + colourTheme + (isBlock ? " btn-block" : null)}>{buttonText}</button>
    )
};

export default Button;