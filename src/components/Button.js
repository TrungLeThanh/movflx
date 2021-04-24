import React from 'react';
import './Button.css';

const Button = ({size, color, nameButton, onClick, active}) => {
    return(
        <button id="buttonStyle" className={`${size} ui inverted ${color} button ${active}`} onClick={onClick}>{nameButton}</button>
    );
};

export default Button;
