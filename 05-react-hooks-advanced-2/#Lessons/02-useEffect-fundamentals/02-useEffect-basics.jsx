import { useState, useEffect } from 'react'

const UseEffectBasics = () => {
  const [value, setValue] = useState(0)

  const sayHello = () => {
    console.log('hello there')
  }

  /////////////////////////
  // run at every re-render
  /////////////////////////
  // sayHello()

  /////////////////////////
  // No 2nd argument: run at every re-render
  /////////////////////////
  // useEffect(() => {
  //   console.log('>> hello from useEffect')
  // })

  /////////////////////////
  // 2nd argument: [] : run at initial render
  /////////////////////////
  useEffect(() => {
    console.log('hello from useEffect')
  }, [])

  return (
    <div>
      <h1>value : {value}</h1>
      <button className='btn' onClick={() => setValue(value + 1)}>
        click me
      </button>
    </div>
  )
}
export default UseEffectBasics
