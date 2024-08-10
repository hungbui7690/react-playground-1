/*
  Nested Components
  - React Developer Tools -> pic
    -> top right corner
    -> more tools/extensions
    -> open chrome web store


******************************

  Nested Components
  - wrap in div or React Segment


*/

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

const Person = () => <h2>john doe</h2> // 1a.
const Message = () => <p>this is my message</p> // 1b.

function Greeting() {
  return (
    // 2.
    <div>
      <Person />
      <Message />
    </div>
  )
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Greeting />
  </StrictMode>
)
