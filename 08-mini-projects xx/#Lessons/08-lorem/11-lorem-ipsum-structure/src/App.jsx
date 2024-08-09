/*
  Lorem Ipsum - Structure
  - pic >> requirement
  - Figma: https://www.figma.com/file/JRDDc3aN6uiBS3yvjbkk0s/Lorem-ipsum?node-id=0%3A1&t=cLtQmBowNmb4V0jP-1

  - Setup: 
    > check data.js
    > Count State Value: 
      + In App.jsx, set up a count state value using the useState hook. Set the default value to 1.
    > Form:
      + Set up a form element that contains a number input and a submit button. 
      + Attach the count state value to the input using the value prop, and set up a handleChange function to update the count state value when the input changes. 
      + Set the minimum value to 1, the maximum value to 8, and the step to 1.

    > Import Text and State Value: 
      + Import the text array from data.js and set up a text state value using the useState hook. 
      + Set the default value to an empty array.

  ** <input type='number' name='amount' id='amount' min={1} step={1} max={8}/>


*/

import { useState } from 'react'
import data from './data' // (3) array of text

const App = () => {
  const [count, setCount] = useState(1) // (1) # of paragraphs
  const [text, setText] = useState([])

  return (
    <section className='section-center'>
      <h4>Tired of Boring Lorem Ipsum?</h4>
      <form className='lorem-form'>
        <label htmlFor='amount'>Paragraphs:</label>
        <input
          type='number'
          name='amount'
          id='amount'
          min={1}
          step={1}
          max={8}
          value={count} // (2a)
          onChange={(e) => setCount(e.target.value)} // (2b)
        />

        <button className='btn'>Generate</button>
      </form>
    </section>
  )
}
export default App
