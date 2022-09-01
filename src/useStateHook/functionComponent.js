import React, { useState } from 'react';
import Counter from './CounterExmple';

export default function FunctionComponent() {
   const [todo, setTodo] = useState('');
   const [warning, setWarning] = useState(null);

   const  handleInputChange = (e) => {
    const inputValue = e.target.value;
    const updatedWarning = inputValue.includes('.js') ? "You need javascript skill to complete the task. Do you have it?" : null;
    
    setTodo(inputValue);
    setWarning(updatedWarning);
    
   }

  return (
    <div>
         <div>
        <div className='hooks'>
            <h1>{'useState() Hook'}</h1>
            <p>On this textarea if you write here '.js' the warning will be change!!</p>
            <p>{todo}</p>
            <div className='textarea'>
              <textarea name="todo" value={todo} onChange={handleInputChange} />
            </div>
            <div className='warning' style={warning? {color: "red", background: "pink"} : {color: 'yellowGreen', }}>
            <h2>{warning || "Good Choice"}</h2>
            </div>
            <div>
              <Counter />
            </div>
        </div>
      </div>
    </div>
  )
}
