/*
  Nested Components
  - React Developer Tools >> pic
    > top right corner
    > more tools/extensions
    > open chrome web store

*/

import React from 'react'
import ReactDOM from 'react-dom/client'

function Greeting() {
  return (
    <div>
      {/* (2) */}
      <Person />
      <Message />
    </div>
  )
}

// (1)
const Person = () => <h2>john doe</h2>
const Message = () => {
  return <p>this is my message</p>
}

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(<Greeting />)
