
import { useState } from 'react';
import './App.scss'

const actions = ['C', '+-', '%', '/', 7, 8, 9, 'X', 4, 5 ,6, '-', 1, 2, 3, '+', 0, '.', '='];

function App() {
  const [value, setValue] = useState ('0');

  const handleClick = (actionClicked) => { 
    if (actionClicked === '.' && !value.includes('.')) {
      setValue(value + actionClicked);
      return;
    }

    if (typeof actionClicked !== 'number') { //si no es un número se para la ejecución
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
          <button key={action} onClick={() => handleClick} className="calculator__action">
            {action}
          </button>
        ))}
        </div>
      </div>
    </>
  )
}

export default App
