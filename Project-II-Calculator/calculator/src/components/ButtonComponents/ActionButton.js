import React from 'react';
import './Button.scss';

const ActionButton = () =>{
    return (
        <div className = 'operators'>
            <div className = 'division'>÷</div>
            <div className = 'multiplication'>x</div>
            <div className = 'subtraction'>-</div>
            <div className = 'addition'>+</div>
            <div className = 'equals'>=</div>
        </div>
    )
};

export default ActionButton;

