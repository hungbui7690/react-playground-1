/*
  useState with Object
  - setup three state values
    # name: string
    # age: number
    # hobby: string
  - render in the browser
  - create a button -> setup a function
    # update all three state values
  - as a result once the user clicks the button, new person is displayed in the browser


***********************

  Automatic Batching
  - Though we call 3 setters -> but react just renders once

      const displayPerson = () => {
        setName('john')
        setAge(28)
        setHobby('scream at the computer')
      }


***********************

  - Reason: 
    -> In React, "batching" refers to the process of grouping multiple state updates into a single update. 
      # This can be useful in certain cases because it allows React to optimize the rendering of your components by minimizing the number of DOM updates that it has to perform.

    -> By default, React uses a technique called "auto-batching" to group state updates that occur within the same event loop into a single update. 
      # This means that if you call the state update function multiple times in a short period of time, React will only perform a single re-render for all of the updates.

    -> React 18 ensures that state updates invoked from any location will be batched by default. 
      # This will batch state updates, including native event handlers, asynchronous operations, timeouts, and intervals.


*/

import { useState } from 'react'

const UseStateObject = () => {
  const [name, setName] = useState('peter') // 1. setup states
  const [age, setAge] = useState(24)
  const [hobby, setHobby] = useState('read books')

  // 2.
  const displayPerson = () => {
    setName('john')
    setAge(28)
    setHobby('scream at the computer')
  }

  return (
    <>
      <h3>{name}</h3>
      <h3>{age}</h3>
      <h4>Enjoys To: {hobby}</h4>
      <button
        className='btn'
        onClick={displayPerson} // 3.
      >
        show john
      </button>
    </>
  )
}

export default UseStateObject
