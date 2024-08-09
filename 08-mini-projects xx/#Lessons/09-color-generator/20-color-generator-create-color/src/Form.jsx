import React from 'react'
import { useState } from 'react'

// (3a)
const Form = ({ addColor }) => {
  const [color, setColor] = useState('')

  console.log(color)

  const handleSubmit = (e) => {
    e.preventDefault()
    addColor(color) // (3b)
  }

  return (
    <section className='container'>
      <h4>Color Generator</h4>

      <form className='color-form' onSubmit={handleSubmit}>
        <input
          type='color'
          value={color}
          onChange={(e) => setColor(e.target.value)}
        />
        <input
          type='text'
          value={color}
          onChange={(e) => setColor(e.target.value)}
          placeholder='#f15025'
        />
        <button className='btn' style={{ background: color }}>
          Submit
        </button>
      </form>
    </section>
  )
}

export default Form
