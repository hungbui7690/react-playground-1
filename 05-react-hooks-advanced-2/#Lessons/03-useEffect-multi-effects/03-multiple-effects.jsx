import { useState, useEffect } from 'react'

const MultipleEffects = () => {
  const [value, setValue] = useState(0)
  const [secondValue, setSecondValue] = useState(0)

  //////////////////////////////
  // useEffect 1
  //////////////////////////////
  useEffect(() => {
    console.log('hello from first useEffect')
  }, [value]) // run at initial render + when "value" changes

  //////////////////////////////
  // useEffect 2
  //////////////////////////////
  useEffect(() => {
    console.log('hello from second useEffect')
  }, [secondValue]) // run at initial render + when "secondValue" changes

  //////////////////////////////
  // ***
  //////////////////////////////
  // useEffect(() => {
  //   console.log('hello from second useEffect')
  // }, [value, secondValue]) // we can also do this

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
