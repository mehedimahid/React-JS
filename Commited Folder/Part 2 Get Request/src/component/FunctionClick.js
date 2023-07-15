import React from 'react'

function FunctionClick() {
   function evenHandeler() {
      console.log('Button Clicked')
   }
  return (
    <div>
      <button onClick={evenHandeler}> Cllick</button>
    </div>
  )
}

export default FunctionClick
//tutorial number 13
