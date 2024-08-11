/*
  Set Function "Gotcha"
  - Functional Update
  - If you want to update the state immediately and synchronously, you can pass a callback function to setState that receives the previous state as an argument and returns the new state. For example:

      setState((prevState) => {
        return { ...prevState, value: newValue };
      });


*/

import { useState } from 'react'

const UseStateGotcha = () => {
  const [value, setValue] = useState(0)

  const handleClick = () => {
    // must return -> otherwise undefined -> below is the latest/current state value
    setValue((curState) => {
      const newState = curState + 1
      console.log('newState: ', newState, 'curState: ', curState)

      return newState
    })
  }

  return (
    <div>
      <h1>{value}</h1>
      <button className='btn' onClick={handleClick}>
        increase
      </button>
    </div>
  )
}

export default UseStateGotcha
