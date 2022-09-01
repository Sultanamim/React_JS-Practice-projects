import React from 'react'

function ShowCount({count,title}) {
    //console.log(`Rendering ${title}...`)
  return (
    <div>
        <p>
            {title} is {count}
        </p>
    </div>
  )
}

export default React.memo(ShowCount);
