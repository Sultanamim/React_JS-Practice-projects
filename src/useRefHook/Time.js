import React, { useRef, useState } from 'react'

export default function Time() {
    const [date, setDate] = useState(new Date());
    const buttonRef = useRef();

    const tick = () => {
        setDate(new Date());
    }

    useRef(() => {
        buttonRef.current = setInterval(tick, 1000);

        return () => {
            clearInterval(buttonRef.current)
        }
    })
  return (
    <div>
      <p>
        Time: {date.toLocaleDateString()}
      </p>
      <button type='button' onClick={clearInterval(buttonRef.current)}>CleanUp</button>
    </div>
  )
}
