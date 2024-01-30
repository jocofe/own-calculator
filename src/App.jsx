
import { useState } from 'react';
import './App.scss'

const actions = [
  'C',
  '+-',
  '%',
  '/',
  7,
  8,
  9,
  'X',
  4,
  5,
  6,
  '-',
  1,
  2,
  3,
  '+',
  0,
  '.',
  '=',
];

export function App() {
  const [value, setValue] = useState ('0');
  const [operation, setOperation] = useState ();

  const calculate = () => {
    const numbers = value.split(operation);
      const num1 = Number(numbers[0]);
      const num2 = !numbers[1] ? num1 : Number(numbers[1]); //Una cadena de texto vacía es un valor falso y undefined también
      let result; 

      switch(operation) {
        case 'X':
          result = num1 * num2;
          break;
        case '+':
          result = num1 + num2;
          break;
        case '-':
          result = num1 - num2;
          break;
        default:
          result = num1 / num2;
          break;
      }
    
      setValue(result.toString());
  };

  const handleClick = (actionClicked) => { 
    if (actionClicked === '.') {
      if (value.includes === '=') {
        setValue(value + actionClicked);
      }
      return;
    }

    if (actionClicked === 'C') {
      setValue('0');
      return;
    }

    if (actionClicked === '+-') {
      setValue((value * -1).toString());
      return;
    }

    if (actionClicked === '%') {
      setValue((value / 100).toString());
      return;
    }

    if (actionClicked === '=') {
      if (typeof operation === 'undefined' || operation === '=') {
        return;
      }
      
      setOperation('=');
      calculate();
      return;
    }

    if (typeof actionClicked !== 'number') {
      const lastChar = value.slice(-1);
      setOperation(actionClicked);

      if (lastChar === operation) {
        const newValue = value.replace(lastChar, actionClicked);
        setValue(newValue);
        return;
      } 
      setValue(value + actionClicked);
    return;
    }

    

    if (value === '0') {
    setValue(actionClicked.toString());
  } else {
    setValue(value + actionClicked);
  }
}

  return (
    <>
      <div className="calculator">
        <div className="calculator__result">{value}</div>
        <div className="calculator__actions">
        {actions.map((action) => (
          <button 
          key={action} onClick={() => handleClick(action)} className="calculator__action">
            {action}
          </button>
        ))}
        </div>
      </div>
    </>
  );
}