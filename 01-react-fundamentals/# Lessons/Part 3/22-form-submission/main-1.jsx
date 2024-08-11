/*
  Event Object and Form Submission
  - form    -> onSubmit
  - input   -> onChange + name property
  - button  -> onClick


**************************

  - e.target.value
  - e.target.name


*/

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

const EventExamples = () => {
  // 2a. button
  const handleButtonClick = () => {
    alert('handle button click')
  }

  // 3a. form
  const handleFormInput = (e) => {
    console.log(e)
    console.log(`Input Name : ${e.target.name}`) // example
    console.log(`Input Value : ${e.target.value}`)
    // console.log('handle form input');
  }

  // 1a. event object
  const handleFormSubmission = (e) => {
    e.preventDefault()
    console.log('form submitted')
  }

  return (
    <section>
      {/* 1b. use onSubmit for form */}
      <form onSubmit={handleFormSubmission}>
        <h2>Typical Form</h2>
        <input
          type='text'
          name='example'
          onChange={handleFormInput} // 3b. input must have name + onChange property
          style={{ margin: '1rem 0' }}
        />
        <button type='submit'>submit form</button>
      </form>

      {/* 2b. */}
      <button onClick={handleButtonClick}>click me</button>
    </section>
  )
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <EventExamples />
  </StrictMode>
)
