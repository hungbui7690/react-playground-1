/*
  Event Object and Form Submission
  - alternative approach
    + use button 
      > button type=submit
      > button
        >> default type of button is "submit"

  *** button needs to be moved into form

*/

import ReactDOM from 'react-dom/client'
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

///////////////////////////
const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(<EventExamples />)
