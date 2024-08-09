/*
  Truthy and Falsy Values (optional)
  - Vanilla JS

  - In JavaScript, a value is considered "truthy" if it is evaluated to true when used in a boolean context. A value is considered "falsy" if it is evaluated to false when used in a boolean context.

  - Here is a list of values that are considered falsy in JavaScript:
    > false
    > 0 (zero)
    > "" (empty string)
    > null
    > undefined
    > NaN (Not a Number)
    *** All other values, including empty objects and arrays, are considered truthy.

*/

import Starter from './03-hooks-rule'
import './index.css'

///////////////////////////////
// Vanilla JS
///////////////////////////////
const x = 'Hello'
const y = ''
const z = 0

if (x) {
  console.log('x is truthy')
}

if (y) {
  console.log('y is truthy')
} else {
  console.log('y is falsy')
}

if (z) {
  console.log('z is truthy')
} else {
  console.log('z is falsy')
}

/*
  Output:
  - "x is truthy"
  - "y is falsy"
  - "z is falsy"

  - In this example, the variable x is a non-empty string, which is considered truthy, so the first if statement is executed. 
  - The variable y is an empty string, which is considered falsy, so the else block of the second if statement is executed. 
  - The variable z is the number 0, which is considered falsy, so the else block of the third if statement is executed.
*/

function App() {
  return (
    <div className='container'>
      <Starter />
    </div>
  )
}

export default App
