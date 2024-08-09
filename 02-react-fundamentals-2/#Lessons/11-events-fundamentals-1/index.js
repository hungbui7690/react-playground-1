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
  const handleButtonClick = () => {
    alert('handle button click')
  }

  return (
    <section>
      {/* (2) add onClick (camel case) */}
      <button onClick={handleButtonClick}>click me</button>
    </section>
  )
}

///////////////////////////
const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(<EventExamples />)
