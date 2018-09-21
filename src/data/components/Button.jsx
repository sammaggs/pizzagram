import React from "react";

const Button = ({ buttonText, onClick, colourTheme, isBlock, isDisabled } ) => {
    return (
        <button onClick={onClick} className={"btn btn-" + colourTheme + (isBlock ? " btn-block" : null)} disabled={isDisabled}>{buttonText}</button>
    )
};

export default Button;