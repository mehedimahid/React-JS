
//Function Component

import React from "react";

// export default function hello() {
//    return <h1>Hello Mehedi </h1>
// }

const Hello = (props) => {
   return ( 
      <div>
         <h1>Hello {props.name} as a {props.heroName} </h1>
         {props.children}
      </div>
   )
}
export default Hello

///tutorial number 9