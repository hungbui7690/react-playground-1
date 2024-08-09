/*
  Events - Fundamentals
  - element, event, function
  - again camelCase

  - React Events : https://reactjs.org/docs/events.html
    > no need to memorize them(idea is the same)
    > most common
      - onClick (click events)
      - onSubmit (submit form )
      - onChange (input change )

*/

import ReactDOM from 'react-dom/client'
import './index.css'

///////////////////////////////
// ***
///////////////////////////////
const EventExamples = () => {
  // (1)
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
          onChange={handleFormInput} // (2) input >> then use onChange
          style={{ margin: '1rem 0' }}
        />
      </form>
      <button onClick={handleButtonClick}>click me</button>
    </section>
  )
}

///////////////////////////
const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(<EventExamples />)
