import React  from "react";
//with JSX

// const Hellojsx =() => {
//    return (
//       <div className: 'dummyClass'>
//          <h1>hello Mehedi</h1>
//       </div>
//    )
// }
// export default Hellojsx
// //without JSX
const Withoutjsx =() => {
   return (
      React.createElement('div', {id: 'testId', className: 'dummyClass'}, React.createElement('h1', null, 'hello Mehedi'))
   )
}
export default Withoutjsx
