import React from 'react';
import useWindowWidth from './useWindowWidth';

export default function LayoutComponentTwo() {
    const onSmallScreen = useWindowWidth(600);

  return (
    <div>
        <h3>You are browsing component2 on {onSmallScreen ? 'Small' : 'Large'} device</h3>
    </div>
  )
}
