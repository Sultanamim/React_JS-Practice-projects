import React, { useEffect, useRef } from 'react';
import Input from './Input';

export default function Form() {
    const inputRef = useRef(null);

    useEffect(() => {
        //inputRef.current.focus();
    },[])
  return (
    <div className='hooks'>
        <h1>{'useRef() Hook'}</h1>
        <Input ref={inputRef} type='text' placeholder='enter something' />
    </div>
  );
}
