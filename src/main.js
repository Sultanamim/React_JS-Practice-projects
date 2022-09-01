import React, { useState } from 'react';
import UseStateHook from './useStateHook/functionComponent';
import UseEffectHook from './useEffectHook/functionComponent';
import Usecallback from './useCallback & useMemo hook/Main';
import UseRef from './useRefHook/Form';

export default function Main() {
    const [show, setShow] = useState(true);
  return (
    <div>
      <UseStateHook />
      <div  className='hooks'>
      <h1>{'useEffect() Hook'}</h1>
        <div>
       {show && <UseEffectHook />}
       </div>
       <div className='btn'>
        <button type='button' onClick={() => setShow((prevShow) => !prevShow)}>
            {show ? 'Hide post' : 'Show post'}
        </button>
      </div>
      </div>
      <Usecallback />
      <UseRef />
    </div>
  )
}
