/*
  Short Circuit Evaluation in React - Common Approaches
  - The ! operator is a logical operator in JavaScript that negates a boolean value. It is equivalent to the not operator in other programming languages.


****************************

  1. App.jsx


*/

import { useState } from 'react'

const Example = ({ name }) => {
  return (
    <div>
      <h4>hello there, {name}</h4>
      <button className='btn'>log out</button>
    </div>
  )
}

const ShortCircuitEvaluation = () => {
  const [text, setText] = useState('') // falsy
  const [name, setName] = useState('susan') // truthy
  const [user, setUser] = useState({ name: 'john' })
  const [isEditing, setIsEditing] = useState(false)

  // can't use if statements -> can only use short circuit & ternary operator
  return (
    <div>
      <h2>{text || 'default value'}</h2>
      {/* and */}
      {text && (
        <div>
          <h2> whatever return</h2>
          <h2>{name}</h2>
        </div>
      )}

      {/* negation */}
      {!text && (
        <div>
          <h2> whatever return</h2>
          <h2>{name}</h2>
        </div>
      )}

      {user && <Example name={user.name} />}
    </div>
  )
}

export default ShortCircuitEvaluation
