import React, { useReducer } from 'react';
import ComponentA from './ComponentB';

export const counterContext = React.createContext();

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

export default function AppComponent() {
    const [count, dispatch] = useReducer(reducer, initialState);
  return (
    <>
     <div>
            <h2 style={{color: '#807D7D' }}>{'useReducer() with useContext()'}</h2>
            <div>
                count: {count}
            </div>
            <div>
                <counterContext.Provider value={{ countDispatch: dispatch}}>
                <ComponentA />
                </counterContext.Provider>
            </div>
     </div>
    </>
  )
}
