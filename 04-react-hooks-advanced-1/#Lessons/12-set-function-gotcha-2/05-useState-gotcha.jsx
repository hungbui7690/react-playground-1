import { useState } from 'react'

const UseStateGotcha = () => {
  const [value, setValue] = useState(0)

  const handleClick = () => {
    // *** must return otherwise undefined >> below is the latest/current state value
    setValue((curState) => {
      const newState = curState + 1
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
