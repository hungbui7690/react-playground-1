/*
  Create Element Function
  - to make our lives easier
  - calling function under the hood
  
*/

import React from 'react'
import ReactDOM from 'react-dom/client'

// (1) what we type
// const Greeting = () => {
//   return React.createElement('h2', {}, 'hello world');
// };

// (2) react does under the hood
// const Greeting = () => {
//   return React.createElement('h2', {}, 'hello world')
// }

////////////////////////////////////
// ***
////////////////////////////////////
// (3) what we type
// function Greeting() {
//   return (
//     <div>
//       <h2>hello world</h2>
//     </div>
//   );
// }

// (4) bts
const Greeting = () => {
  return React.createElement(
    'div',
    {},
    React.createElement('h2', {}, 'hello world')
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(<Greeting />)
