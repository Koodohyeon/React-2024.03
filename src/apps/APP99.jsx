import React, { useState } from 'react';
import './Ap.css';

function Calculator() {
  const [input, setInput] = useState('');
  const [result, setResult] = useState('');

  const handleClick = (value) => {
    if (value === '=') {
      try {
        setResult(eval(input).toString());
      } catch (error) {
        setResult('Error');
      }
    } else if (value === 'c') {
      setInput('');
      setResult('');
    } else {
      setInput(input + value);
    }
  };

  return (
    <div className="calculator">
    <table>
      <tr>
        <td>
            <input type="text" value={input} readOnly placeholder='입력값'/> <br />
            <input type="text" value={result} readOnly placeholder='결과값'/>
         </td>
      </tr>
      <div className="buttons">
        <tr>
        <button onClick={() => handleClick('7')}>7</button>
        <button onClick={() => handleClick('8')}>8</button>
        <button onClick={() => handleClick('9')}>9</button>
        <button onClick={() => handleClick('*')}>*</button>
        </tr>
        <tr>
        <button onClick={() => handleClick('4')}>4</button>
        <button onClick={() => handleClick('5')}>5</button>
        <button onClick={() => handleClick('6')}>6</button>
        <button onClick={() => handleClick('-')}>-</button>
        </tr>
        <tr>
        <button onClick={() => handleClick('1')}>1</button>
        <button onClick={() => handleClick('2')}>2</button>
        <button onClick={() => handleClick('3')}>3</button>
        <button onClick={() => handleClick('+')}>+</button>
        </tr>
        <tr>
        <button onClick={() => handleClick('/')}>/</button>
        <button onClick={() => handleClick('0')}>0</button>
        <button onClick={() => handleClick('c')}>c</button>
        <button onClick={() => handleClick('=')}>=</button>
        </tr>
      </div>
    </table>
    </div>
  );
}

export default Calculator;