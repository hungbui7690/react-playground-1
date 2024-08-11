/*
  Set Function "Gotcha"
  - should we use functional update approach for everything?
    -> depends on each case


*/

import { useState } from 'react'

const UseStateGotcha = () => {
  const [value, setValue] = useState(0)

  const handleClick = () => {
    // when we use setTimeout() -> we need to use callback inside setTimeout()
    setTimeout(() => {
      setValue((currentState) => {
        return currentState + 1
      })
    }, 1000)
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
