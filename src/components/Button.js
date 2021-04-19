import React from 'react';

const Button = ({size, color}) => {
    return(
        <button className={`${size} ui inverted ${color} button`}></button>
    );
};

export default Button;
