import React from 'react';
import './Button.css';

const Button = ({size, color, nameButton, onClick}) => {
    return(
        <button id="buttonStyle" className={`${size} ui inverted ${color} button`} onClick={onClick}>{nameButton}</button>
    );
};

export default Button;
