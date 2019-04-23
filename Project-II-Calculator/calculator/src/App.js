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
        <button>Clear</button>
        <button>÷</button>
      </div>
      <div className ='row2'>
        <button>7</button>
        <button>8</button>
        <button>9</button>
        <button>x</button>
      </div>
      <div className = 'row3'>
        <button>4</button>
        <button>5</button>
        <button>6</button>
        <button>-</button>  
      </div>
      <div className = 'row4'>
        <button>1</button>
        <button>2</button>
        <button>3</button>
        <button>+</button>
      </div>
      <div className = 'row5'>
      <button>=</button>
      <button>0</button>
      </div>
    </div>
  );
};

export default App;
