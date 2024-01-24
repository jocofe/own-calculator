
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
  const [operator, setOperator] = useState ('');

  const handleClick = (actionClicked) => { 
    if (actionClicked === '.' && !value.includes('.')) {
      setValue(value + actionClicked);
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

    if (actionClicked === '-' && !value.includes('X') && !value.includes('-') && !value.includes('+') && !value.includes('/')) {
      setValue((value + actionClicked));
      return;
    }

    if (actionClicked === '+' && !value.includes('X') && !value.includes('-') && !value.includes('+') && !value.includes('/')) {
      setValue((value + actionClicked));
      return;
    }

    if (actionClicked === 'X' && !value.includes('X') && !value.includes('-') && !value.includes('+') && !value.includes('/')) {
      setValue((value + actionClicked));
      return;
    }

    if (actionClicked === '/' && !value.includes('X') && !value.includes('-') && !value.includes('+') && !value.includes('/')) {
      setValue((value + actionClicked));
      return;
    }

    if (actionClicked === '=' && !value.includes('=')) {
    }


    if (typeof actionClicked !== 'number') {
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