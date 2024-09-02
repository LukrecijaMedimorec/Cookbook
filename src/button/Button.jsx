import './button.css'
import React from 'react';

// Define the Button component
const Button = ({ color, textColor, font, fontSize, onClick, children }) => {
    const buttonStyle = {
        backgroundColor: color,
        color: textColor,
        fontFamily: font,
        fontSize: fontSize,

    };

    return (
        <button className="button" style={buttonStyle} onClick={onClick}>
            {children}
        </button>
    );
};

export default Button;
