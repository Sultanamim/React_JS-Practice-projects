import React, { useContext } from 'react';
import { counterContext } from './appComponent';

export default function ComponentA() {
    const countContext = useContext(counterContext);
  return (
    <div className='btn'>
    <button type='button' onClick= {() => countContext.countDispatch({type:'INCREMENT'})}>Increment</button>
    <button type='button' onClick= {() => countContext.countDispatch({type:'DECREMENT'})}>Decrement</button>
</div>
  )
}
