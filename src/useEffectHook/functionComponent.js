import React, { useEffect, useState } from 'react';

export default function FunctionComponent() {
    const [count, setCount] = useState(0);
    const [date, setDate] = useState(new Date());
    const [text, setText] = useState('');

    useEffect(() => {
        //console.log("Updating document title");
        document.title = `Clicked ${count} times`;
    }, [count])

    useEffect(() => {
        //console.log("Starting timer");
        const interval = setInterval(tick, 1000);

        return () => {
            //console.log("Component Unmounted");
            clearInterval(interval);
        }
    }, [])

   const addClick = () => {
       setCount((prevCount) => prevCount + 1);
    }

   const tick = () => {
        setDate(new Date());
    }

  return (
    <div className='effectHook'>
           <p>Time: {date.toLocaleTimeString()}</p>
           <input type='text' onChange={(e) => setText(e.target.value)} />
        <div className='btn'>
          <button type='button' onClick={addClick}>
            Click
          </button>
          <p>{'(Use this "Click" button & Check the "Document Title" on the top.)'}</p>
        </div>
    </div>
  )
}
