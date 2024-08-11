/*
  Events - Fundamentals
  - element, event, function
  - again camelCase -> onClick


******************************

  - React Events : https://reactjs.org/docs/events.html
    -> no need to memorize them(idea is the same)
    -> most common
      # onClick   -> click events
      # onSubmit  -> submit form 
      # onChange  -> input change


*/

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

const EventExamples = () => {
  // 1.
  const handleButtonClick = () => {
    alert('handle button click')
  }

  return (
    <section>
      {/* 2. onClick -> camelCase */}
      <button onClick={handleButtonClick}>click me</button>
    </section>
  )
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <EventExamples />
  </StrictMode>
)
