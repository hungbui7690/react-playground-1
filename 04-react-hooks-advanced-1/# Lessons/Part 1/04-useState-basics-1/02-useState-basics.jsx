/*
  UseState Fundamentals
  - useState hook = useState function
  - returns an array with two elements: 
    -> the current state value
    -> and a function that we can use to update the state -> setter
  - accepts default value as an argument
  - update state triggers re-render


*/

import { useState } from 'react' // 1.

const UseStateBasics = () => {
  // 2.
  // console.log(useState()) // [undefined, ƒ]
  // console.log(useState('bob')) // ['bob', ƒ]

  // 3. because we're getting back array -> we can do this
  const value = useState()[0]
  const handler = useState()[1]
  console.log(value, handler) // undefined, f

  // 4.
  const valueX = useState('joe')[0]
  const handlerX = useState()[1]
  console.log(valueX, handlerX) // Joe, f

  return (
    <div>
      <h2>useState basics</h2>
    </div>
  )
}

export default UseStateBasics
