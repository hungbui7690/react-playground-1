/*
  Short Circuit Evaluation in React - Common Approaches
  - Vanilla JS (Optional)
  - The ! operator is a logical operator in JavaScript that negates a boolean value. It is equivalent to the not operator in other programming languages.

    (2) 05-short-circuit-examples

*/

import Starter from './05-short-circuit-examples.jsx'
import './index.css'

///////////////////////
// (1) Vanilla JS
///////////////////////
let isTrue = true
let isFalse = false

console.log(!isTrue) // outputs: false
console.log(!isFalse) // outputs: true

// You can use the ! operator (negation) to test if a value is not truthy or falsy:
let val1 = 0
if (!val1) {
  console.log('val1 is falsy')
}

// You can also use the ! operator to convert a value to a boolean and negate it:
let val2 = 'hello' // truthy value
let bool = !val2 // bool is now false

val2 = '' // falsy value
bool = !val2 // bool is now true

function App() {
  return (
    <div className='container'>
      <Starter />
    </div>
  )
}

export default App
