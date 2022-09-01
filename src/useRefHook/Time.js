import React, { useRef, useState } from 'react'

export default function Time() {
    const [date, setDate] = useState(new Date());
    const buttonRef = useRef();
  return (
    <div>
      <p>
        Time: {date.toLocaleDateString()}
      </p>
      <button type='button'></button>
    </div>
  )
}
