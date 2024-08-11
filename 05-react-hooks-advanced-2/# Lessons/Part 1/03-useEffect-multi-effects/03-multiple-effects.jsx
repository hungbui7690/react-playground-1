/*
  UseEffect - Multiple Effects
  - just because we can have multi useEffect 
    -> it doesn't mean that we should do that
  - for dependency list, we can have none, one, or multi values in this list


*/

import { useState, useEffect } from 'react'

const MultipleEffects = () => {
  const [value, setValue] = useState(0)
  const [secondValue, setSecondValue] = useState(0)

  // 1.
  useEffect(() => {
    console.log('hello from first useEffect')
  }, [value]) // run at initial render + when "value" changes

  // 2.
  useEffect(() => {
    console.log('hello from second useEffect')
  }, [secondValue]) // run at initial render + when "secondValue" changes

  // 3. Multiple items in dependency list
  useEffect(() => {
    console.log('hello from second useEffect')
  }, [value, secondValue])

  return (
    <div>
      <h1>value : {value}</h1>
      <button className='btn' onClick={() => setValue(value + 1)}>
        value
      </button>
      <h1>second value : {secondValue}</h1>
      <button className='btn' onClick={() => setSecondValue(secondValue + 1)}>
        second value
      </button>
    </div>
  )
}
export default MultipleEffects
