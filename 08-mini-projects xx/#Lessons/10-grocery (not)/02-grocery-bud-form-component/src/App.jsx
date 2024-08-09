/*
  Grocery Bud - Form Component
  - pic
  - Figma: https://www.figma.com/file/8rXGl68NoEmAhHpcV7aB5o/Grocery-bud?node-id=0%3A1&t=IMjjwDExGWpXdpQL-1

  - State Variable: 
    + In App.jsx, set up a state variable called items using the useState hook.

  - Form Component:
    + Create a Form component that contains an input field and a submit button. 
    + When the user submits the form, the handleSubmit function is called.

    + In the handleSubmit function, prevent the default form submission behavior using event.preventDefault(). 
    + If the form is submitted with an empty value, log a message and return.

*/

import { useState } from 'react'
import Form from './Form'

const App = () => {
  const [items, setItems] = useState([]) // (1)

  // (2) go to Form
  return (
    <section className='section-center'>
      <Form />
    </section>
  )
}

export default App
