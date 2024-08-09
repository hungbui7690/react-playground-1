import React from 'react'
import { useState } from 'react'

const Form = () => {
  const [color, setColor] = useState('') // (1a)

  // (2a)
  const handleSubmit = (e) => {
    e.preventDefault()
  }

  return (
    <section className='container'>
      <h4>Color Generator</h4>

      {/* (2b) */}
      <form className='color-form' onSubmit={handleSubmit}>
        <input
          type='text'
          value={color} // (1b)
          onChange={(e) => setColor(e.target.value)} // (1c)
          placeholder='$f15025'
        />
        <button
          className='btn'
          style={{ background: color }} // *** use the color as background of button
        >
          Submit
        </button>
      </form>
    </section>
  )
}

export default Form
