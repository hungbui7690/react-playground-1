/*
  Event Object and Form Submission


*****************************
  # Alternative Approach
    - use button 
    -> button type=submit
    -> default type of button is "submit"


*****************************

  🏐 button needs to be moved into form


*/

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

///////////////////////////////
// ***
///////////////////////////////
const EventExamples = () => {
  const handleFormInput = (e) => {
    console.log(e)
    console.log(`Input Name : ${e.target.name}`)
    console.log(`Input Value : ${e.target.value}`)
  }

  // (2)
  const handleFormSubmission = (e) => {
    e.preventDefault()
    console.log('form submitted')
  }

  return (
    <section>
      {/* (1) remove onSubmit here  */}
      <form>
        <h2>Typical Form</h2>
        <input
          type='text'
          name='example'
          onChange={handleFormInput}
          style={{ margin: '1rem 0' }}
        />

        {/* (3) use onClick instead of onSubmit */}
        <button onClick={handleFormSubmission}>submit form</button>
      </form>
    </section>
  )
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <EventExamples />
  </StrictMode>
)
