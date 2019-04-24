import React from 'react';
import './Button.scss';

const NumberButton = (props) =>{
    return (
        <button className={props.className}>{props.text}</button>
    )
};

export default NumberButton;
