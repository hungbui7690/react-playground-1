/*
  UseState Fundamentals
  - create and initialize state
    -> useState(default-value)

  - useState() return array with 2 values:
    -> const [count, setCount] = useState(0)
    -> we can use array destructure to setup 2 variables 
    -> count = 0, setCount = f 


***************************

  - to update state variable 
    -> need to use: setCount()
    -> cannot use: count = count + 1


***************************

  - setCount(count + 1) 
    -> everytime this runs, it will trigger re-renders + preserves the value between re-render
    -> if we have multiple buttons -> it will preserve the value for us 


*/

import { useState } from 'react'

const UseStateBasics = () => {
  const [count, setCount] = useState(0) // 1.

  const handleClick = () => {
    setCount(count + 1) // 2. trigger re-renders + preserves the value between re-render

    // BE CAREFUL -> we can set any value -> the line below will work
    // setCount('pants');
  }

  return (
    <div>
      <h4>You clicked {count} times</h4>
      <button className='btn' onClick={handleClick}>
        Click me
      </button>
    </div>
  )
}

export default UseStateBasics
