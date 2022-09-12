import React from 'react';
import LayoutComponentTwo from './LayoutComponentTwo';
import useWindowWidth from './useWindowWidth';

export default function LayoutComponentOne() {
   const onSmallScreen = useWindowWidth(768);

  return (
    <div className='hooks'>
        <h1>{'Custom Hooks()'}</h1>
        <h3>You are browsing component1 on {onSmallScreen ? 'Small' : 'Large'} device</h3>
        <LayoutComponentTwo />
    </div>
  )
}
