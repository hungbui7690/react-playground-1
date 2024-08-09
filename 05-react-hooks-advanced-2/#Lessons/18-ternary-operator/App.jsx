/*
  Ternary Operator
  - Vanilla JS

  - In JavaScript, the ternary operator is a way to concisely express a simple conditional statement. 
    > It is often called the "conditional operator" or the "ternary conditional operator".

  - Here is the basic syntax for using the ternary operator:
    > condition ? expression1 : expression2;

  - If condition is truthy, the operator will return expression1. If condition is falsy, it will return expression2.

*/

import Starter from './05-short-circuit-examples.jsx'
import './index.css'

function App() {
  return (
    <div className='container'>
      <Starter />
    </div>
  )
}

export default App
