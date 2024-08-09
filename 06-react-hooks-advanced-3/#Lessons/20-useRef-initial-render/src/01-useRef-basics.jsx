import { useEffect, useRef, useState } from 'react'

const UseRefBasics = () => {
  const [value, setValue] = useState(0)
  const refContainer = useRef(null)
  const isMounted = useRef(false) // (1)

  // (3) another use case
  useEffect(() => {
    refContainer.current.focus()
  })

  // (2) what if we just want to run this AFTER initial render (NOT ON INITIAL RENDER)?
  useEffect(() => {
    // *** here's the condition that helps to run after initial render
    if (!isMounted.current) {
      isMounted.current = true
      return
    }
    console.log('re-render') // *** here's the functionality we want to run after initial render
  }, [value])

  const handleSubmit = (e) => {
    e.preventDefault()

    const name = refContainer.current.value
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
            ref={refContainer}
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
