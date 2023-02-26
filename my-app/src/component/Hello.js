
//Function Component

import React from "react";

// export default function hello() {
//    return <h1>Hello Mehedi </h1>
// }

const Hello = (props) => {
   const {name, heroName} = props
   return (
      <div>
         <h1>Hello {name} also known as a {heroName} </h1>
         {/* {props.children} */}
      </div>
   )
}
export default Hello

///tutorial number 9