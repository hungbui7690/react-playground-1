import { useState } from 'react'

const UseStateGotcha = () => {
  const [value, setValue] = useState(0)

  const handleClick = () => {
    // *** it does not update the value when we use setTimeout()
    setTimeout(() => {
      console.log('clicked the button')
      setValue(value + 1)
    }, 3000)
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
