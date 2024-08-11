/*
  Mind Grenade
  - in react, we also can access event object


******************************

  - in JS, we pass the anonymous function -> in react, we also can do that

      btn.addEventListener('click', function (e) {
        - access event object
        - do something when event fires
      });


*/

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

const EventExamples = () => {
  return (
    <section>
      <form>
        <h2>Typical Form</h2>
        <input
          type='text'
          name='example'
          onChange={(e) => console.log(e.target.value)} // we also can access to event object
          style={{ margin: '1rem 0' }}
        />
      </form>
      {/* we can pass function ref like before -> or we can use arrow function here -> because we just want to pass the function, not invoke */}
      <button onClick={() => console.log('you clicked me')}>click me</button>
    </section>
  )
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <EventExamples />
  </StrictMode>
)
