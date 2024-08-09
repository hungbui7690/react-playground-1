import { useState } from 'react'

const UseStateBasics = () => {
  /*
  (1) useState() return array with 2 values 
  >> we can use array destructure to setup 2 variables 
  >> count = 0, setCount = f that useState() returns back
*/
  const [count, setCount] = useState(0)

  // (3)
  const handleClick = () => {
    setCount(count + 1) // everytime this runs, it will trigger re-renders + preserves the value between re-render

    // *** be careful, we can set any value >> the line below will work
    // setCount('pants');
  }

  // (2)
  return (
    <div>
      <h4>You clicked {count} times</h4>

      {/* (4 ) */}
      <button className='btn' onClick={handleClick}>
        Click me
      </button>
    </div>
  )
}

export default UseStateBasics
