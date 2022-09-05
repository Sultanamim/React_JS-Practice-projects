import React, {useReducer} from 'react';


const initialState = {
    counter: 0,
};

const initialState2 = 0;

const reducer = (state, action) => {
    switch(action.type){
        case 'INCREMENT':
            return {...state, counter: state.counter + action.value};
        case 'DECREMENT':
            return {...state, counter: state.counter - action.value};
        case 'Increment2':
            return state + action.value;
        case 'Decrement2':
            return state - action.value;
        default:
            return state;
    }
}

export default function Counter2() {
    const [count, dispatch] = useReducer(reducer, initialState);
    const [count2, dispatch2] = useReducer(reducer, initialState2);
   
  return (
    <>
    <div>
        <h2 style={{color: '#807D7D' }}>{'State & action as Object & multiple useReducer'}</h2>
    </div>
    <div>
        <div>Counter1:  {count.counter}</div>
        <div className='btn'>
            <button type='button' onClick= {() => dispatch({type:'INCREMENT', value: 1})}>Increment 1</button>
            <button type='button' onClick= {() => dispatch({type:'DECREMENT', value: 1})}>Decrement 1</button>
            <button type='button' onClick= {() => dispatch({type:'INCREMENT', value: 5})}>Increment 5</button>
            <button type='button' onClick= {() => dispatch({type:'DECREMENT', value: 5})}>Decrement 5</button>
        </div>
        <div>Counter2:  {count2}</div>
        <div className='btn'>
            <button type='button' onClick= {() => dispatch2({type:'Increment2', value: 1})}>Increment 1</button>
            <button type='button' onClick= {() => dispatch2({type:'Decrement2', value: 1})}>Decrement 1</button>
            <button type='button' onClick= {() => dispatch2({type:'Increment2', value: 5})}>Increment 5</button>
            <button type='button' onClick= {() => dispatch2({type:'Decrement2', value: 5})}>Decrement 5</button>
        </div>
    </div>
    </>
  )
}
