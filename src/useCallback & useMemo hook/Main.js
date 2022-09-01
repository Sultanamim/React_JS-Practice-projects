import React, { useCallback, useMemo, useState } from 'react';
import Title from './Title';
import ShowCount from './ShowCount';
import Button from './Button';

export default function Main() {
    const [count1, setCount1] = useState(0);
    const [count2, setCount2] = useState(0);

    const increamentByOne = useCallback(() =>{
        setCount1((prevCount) => prevCount + 1);
    }, [])

    const increamentByFive = useCallback(() =>{
        setCount2((prevCount) => prevCount + 5);
    }, [])

    const isEvenOrOdd = useMemo(() => {
      let i = 0;
      while(i < 1000000000) i += 1;
      return count1 %2 === 0;
    }, [count1])

  return (
    <div className='hooks btn'>
        <Title />
        <ShowCount count={count1} title='Counter1' />
        <span>{isEvenOrOdd ? 'Even': 'Odd'}</span>
        <Button handleClick={increamentByOne}>Increament By One</Button>
        <hr />
        <ShowCount count={count2} title='Counter2' />
        <Button handleClick={increamentByFive}>Increament By Five</Button>
    </div>
  )
}
