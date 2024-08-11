/*
  Ternary Operator
  - In JavaScript, the ternary operator is a way to concisely express a simple conditional statement. 
    -> It is often called the "conditional operator" or the "ternary conditional operator".


******************************

  - Here is the basic syntax for using the ternary operator:
    ~~ condition ? expression1 : expression2;

  - If condition is truthy, the operator will return expression1. If condition is falsy, it will return expression2.


*/

import { useState } from 'react'

const ShortCircuitEvaluation = () => {
  const [user, setUser] = useState({ name: 'john' })
  const [isEditing, setIsEditing] = useState(false)

  return (
    <div>
      <h2>Ternary Operator</h2>

      <button className='btn'>{isEditing ? 'edit' : 'add'}</button>

      {user ? (
        <div>
          <h4>hello there user {user.name}</h4>
        </div>
      ) : (
        <div>
          <h2>please login</h2>
        </div>
      )}
    </div>
  )
}

export default ShortCircuitEvaluation
