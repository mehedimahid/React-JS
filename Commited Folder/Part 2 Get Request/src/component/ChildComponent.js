import React from 'react'

function ChildComponent(props) {
  return (
    <div>
      <button onClick={() =>props.greedHandler('child')}>Greed Parent</button>
    </div>
  )
}

export default ChildComponent
//tutorial number 15
