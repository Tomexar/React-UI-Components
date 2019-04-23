import React from 'react';
import './App.scss';
import CalculatorDisplay from './components/DisplayComponents/CalculatorDisplay';
import ActionButton from './components/ButtonComponents/ActionButton';
import NumberButton from './components/ButtonComponents/NumberButton';


const App = () => {
  return (
    <div>
      <CalculatorDisplay />
      <div className ="row1">
        <button class = 'widebtn'>clear</button>
        <button class = 'redbtn'>÷</button>
      </div>
      <div className ='row2'>
        <button class = 'numbtn'>7</button>
        <button class = 'numbtn'>8</button>
        <button class = 'numbtn'>9</button>
        <button class = 'redbtn'>x</button>
      </div>
      <div className = 'row3'>
        <button class = 'numbtn'>4</button>
        <button class = 'numbtn'>5</button>
        <button class = 'numbtn'>6</button>
        <button class = 'redbtn'>-</button>  
      </div>
      <div className = 'row4'>
        <button class = 'numbtn'>1</button>
        <button class = 'numbtn'>2</button>
        <button class = 'numbtn'>3</button>
        <button class = 'redbtn'>+</button>
      </div>
      <div className = 'row5'>
      <button class = 'widebtn'>0</button>
      <button class = 'redbtn'>=</button>
      </div>
    </div>
  );
};

export default App;
