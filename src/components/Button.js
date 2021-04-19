import React from 'react';
import './Button.css';

const Button = ({size, color, nameButton}) => {
    return(
        <button id="buttonStyle" className={`${size} ui inverted ${color} button`}>{nameButton}</button>
    );
};

export default Button;
