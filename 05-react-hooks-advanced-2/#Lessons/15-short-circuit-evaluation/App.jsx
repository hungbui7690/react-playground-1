/*
  Short Circuit Evaluation (optional)
  - Vanilla JS

  - In JavaScript, short-circuit evaluation is a technique that allows you to use logical operators (such as && and ||) to perform conditional evaluations in a concise way.

  - The && operator (logical AND) returns the first operand if it is "falsy", or the second operand if the first operand is "truthy".

*/

import Starter from './03-hooks-rule'
import './index.css'

///////////////////////////////
// Vanilla JS
///////////////////////////////
const x = 0
const y = 1

console.log(x && y) // Output: 0 (the first operand is falsy, so it is returned)
console.log(y && x) // Output: 0 (the second operand is falsy, so it is returned)

///////////////////////////////
// The || operator (logical OR) returns the first operand if it is "truthy", or the second operand if the first operand is "falsy".
const a = 0
const b = 1

console.log(a || b) // Output: 1 (the first operand is falsy, so the second operand is returned)
console.log(b || a) // Output: 1 (the first operand is truthy, so it is returned)

////////////////////////////////
// Short-circuit evaluation can be useful in cases where you want to perform a certain action only if a certain condition is met, or you want to return a default value if a certain condition is not met.
function displayName(name) {
  return name || 'Anonymous'
}

console.log(displayName('Pizza')) // Output: "Pizza"
console.log(displayName()) // Output: "Anonymous" >> because name is undefined

/*
  - In this example, the displayName() function returns the name property of the user object if it exists, or "Anonymous" if the name property is not present. 
  - This is done using the || operator and short-circuit evaluation.
*/

function App() {
  return (
    <div className='container'>
      <Starter />
    </div>
  )
}

export default App
