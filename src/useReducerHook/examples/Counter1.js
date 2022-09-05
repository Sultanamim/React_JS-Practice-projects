import React, {useReducer} from 'react';


const initialState = 0;
const reducer = (state, action) => {
    switch(action.type){
        case 'INCREMENT':
            return state + 1;
        case 'DECREMENT':
            return state - 1;
        default:
            return state;
    }
}

export default function Counter1() {
    const [count, dispatch] = useReducer(reducer, initialState);
  return (
    <>
    <div>
        <h2 style={{color: '#807D7D' }}>{'State & action as primitive Value'}</h2>
    </div>
    <div>Counter1:  {count}</div>
    <div className='btn'>
        <button type='button' onClick= {() => dispatch({type:'INCREMENT'})}>Increment</button>
        <button type='button' onClick= {() => dispatch({type:'DECREMENT'})}>Decrement</button>
    </div>
    </>
  )
}
