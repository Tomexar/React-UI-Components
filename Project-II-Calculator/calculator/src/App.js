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
        <ActionButton className = "widebtn" text = 'clear'/>
        <NumberButton className = "redbtn" text = '÷' />
      </div>
      <div className ='row2'>
        <NumberButton className = "numbtn" text = '7' />  
        <NumberButton className = "numbtn" text = '8' />  
        <NumberButton className = "numbtn" text = '9' />  
        <NumberButton className = "redbtn" text = 'x' />  
      </div>
      <div className = 'row3'>
        <NumberButton className = "numbtn" text = '4' />  
        <NumberButton className = "numbtn" text = '5' />  
        <NumberButton className = "numbtn" text = '6' />  
        <NumberButton className = "redbtn" text = '-' /> 
      </div>
      <div className = 'row4'>
        <NumberButton className = "numbtn" text = '1' />  
        <NumberButton className = "numbtn" text = '2' />  
        <NumberButton className = "numbtn" text = '3' />  
        <NumberButton className = "redbtn" text = '+' /> 
      </div>  
      <div className = 'row5'>
        <ActionButton className = "widebtn" text = '0'/>
        <NumberButton className = "redbtn" text = '=' />
      </div>
    </div>
  );
};

export default App;
