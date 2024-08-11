import React from 'react'
import { useState } from 'react'

const Form = () => {
  const [color, setColor] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
  }

  return (
    <section className='container'>
      <h4>Color Generator</h4>

      <form className='color-form' onSubmit={handleSubmit}>
        {/* *** <input type='color'> */}
        <input
          type='color' // ***
          value={color} // (a)
          onChange={(e) => setColor(e.target.value)} // (b)
        />
        <input
          type='text'
          value={color}
          onChange={(e) => setColor(e.target.value)}
          placeholder='$f15025'
        />
        <button className='btn' style={{ background: color }}>
          Submit
        </button>
      </form>
    </section>
  )
}

export default Form
