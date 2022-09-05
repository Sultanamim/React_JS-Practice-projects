import React from 'react';
import Counter1 from './examples/Counter1';
import Counter2 from './examples/Counter2';
import AppComponent from './examples/appComponent';
import Getpost1 from './examples/Getpost1';
import GetPost2 from './examples/GetPost2';

export default function Main() {
  return (
    <div className='hooks'>
        <h1>{'useReducer() Hook'}</h1>
        <Counter1 />
        <hr />
        <Counter2 />
        <hr />
        <AppComponent />
        <hr />
        <Getpost1 />
        <hr />
        <GetPost2 />
    </div>
  )
}
