import React, { useState } from 'react'

export default function CounterExmple() {
    const [count, setCount] = useState(0);
    let i = 0;
   
    const addFive = () => {
        while(i<5){
            setCount((prevState) => prevState + 1);
            i += 1;
        }
    }

  return (
    <div>
        <h3 style={{textDecoration: 'underline'}}>Counter example for useState with previous state</h3>
        <div>
            {count}
            <p className='btn'>
                <button type='button' onClick={() => setCount((prevState) => prevState + 1)}>Add 1</button>
                <button type='button' onClick={addFive}>Add 5</button>
            </p>
        </div>
    </div>
  )
}
