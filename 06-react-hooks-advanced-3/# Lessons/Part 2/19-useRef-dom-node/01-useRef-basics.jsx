/*
  useRef - DOM Node


*******************************

  - useState: 
    -> preserves the states
    -> TRIGGERS re-render everytime update the value


*******************************
  
  - useRef: 
    -> preserves the value between renders
    -> DOES NOT TRIGGER re-render
    -> used to access DOM Nodes


*******************************

  🎑 useRef is another way to setup uncontrolled inputs 

    -> refContainer.current         -> the current element
    -> refContainer.current.value   -> for input
    -> refContainer.current.checked -> for checkbox


*/

import { useEffect, useRef, useState } from 'react'

const UseRefBasics = () => {
  const [value, setValue] = useState(0)
  const refContainer = useRef(null) // 1. an object with "current" property

  // 3. to test the value of refContainer after initial render
  useEffect(() => {
    console.log(refContainer) // {current: input#name.form-input}
  })

  const handleSubmit = (e) => {
    e.preventDefault()

    const name = refContainer.current.value // 4.
    console.log(name)
  }

  return (
    <div style={{ textAlign: 'center' }}>
      <form className='form' onSubmit={handleSubmit}>
        <div className='form-row'>
          <label htmlFor='name' className='form-label'>
            Name
          </label>
          <input
            type='text'
            id='name'
            ref={refContainer} // 2.
            className='form-input'
          />
        </div>
        <button type='submit' className='btn btn-block'>
          submit
        </button>
      </form>
      <h1>value : {value}</h1>
      <button
        onClick={() => setValue(value + 1)}
        className='btn'
        style={{ marginTop: '20px' }}
      >
        increase
      </button>
    </div>
  )
}

export default UseRefBasics
