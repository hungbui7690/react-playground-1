/*
  Set Function "Gotcha"
  - setup a state value and the button
  - add functionality to increase value by 1
  - log a state value, right after setFunction -> 1.


**************************

  - Keep in mind that the state update function setState does not immediately mutate the state. 
    -> Instead, it schedules an update to the state and tells React that it needs to re-render the component. 
    -> The actual state update will be performed as part of the next rendering cycle. 
    -> Be mindful when you need to set state value based on a different state value.


*/

import { useState } from 'react'

const UseStateGotcha = () => {
  const [value, setValue] = useState(0)

  const handleClick = () => {
    setValue(value + 1)

    // Be Careful: it's the old (previous) value -> so if you have any functionality that relies on the latest value -> it will be wrong !!!
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
