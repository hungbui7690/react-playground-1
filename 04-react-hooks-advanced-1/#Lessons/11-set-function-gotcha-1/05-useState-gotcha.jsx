import { useState } from 'react'

const UseStateGotcha = () => {
  const [value, setValue] = useState(0)

  const handleClick = () => {
    setValue(value + 1)

    /*
      be careful it's the old value
      > so if you have any functionality that relies on the latest value 
      > it will be wrong !!!
    */
    console.log(value)
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
