/*
  Events - Fundamentals
  - input -> use onChange


*/

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

const EventExamples = () => {
  // 1.
  const handleFormInput = () => {
    console.log('handle form input')
  }
  const handleButtonClick = () => {
    alert('handle button click')
  }
  return (
    <section>
      <form>
        <h2>Typical Form</h2>
        <input
          type='text'
          name='example'
          onChange={handleFormInput} // 2. input -> use onChange
          style={{ margin: '1rem 0' }}
        />
      </form>
      <button onClick={handleButtonClick}>click me</button>
    </section>
  )
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <EventExamples />
  </StrictMode>
)
