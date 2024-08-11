/*
  Lorem Ipsum - nanoid
  - nanoid is a small, fast, and secure library for generating unique IDs in JavaScript. 
  - It is designed to be as compact as possible while still providing a unique, unpredictable, and collision-resistant identifier.
  
  - The library generates random IDs that consist of a combination of uppercase and lowercase letters, as well as numbers. 
  - The default ID length is 21 characters, but this can be changed by passing a different length as an argument.

  - One of the benefits of using nanoid is that it generates IDs that are highly unlikely to collide, even when generating a large number of them. This is achieved by using a combination of randomness and a predefined set of characters, which ensures that each ID is unique and unpredictable.

    *** npm i nanoid

*/

import { useState } from 'react'
import data from './data'

import { nanoid } from 'nanoid'

const App = () => {
  const [count, setCount] = useState(1)
  const [text, setText] = useState([])

  const handleSubmit = (e) => {
    e.preventDefault()

    const amount = Number(count)

    const newText = data.slice(0, amount)
    setText(newText)
  }

  return (
    <section className='section-center'>
      <h4>Tired of Boring Lorem Ipsum?</h4>

      <form className='lorem-form' onSubmit={handleSubmit}>
        <label htmlFor='amount'>Paragraphs:</label>
        <input
          type='number'
          name='amount'
          id='amount'
          min={1}
          step={1}
          max={8}
          value={count}
          onChange={(e) => setCount(e.target.value)}
        />

        <button className='btn'>Generate</button>
      </form>

      <article className='lorem-text'>
        {text.map((item, idx) => {
          const id = nanoid() // (a) Generates a 21-character random ID
          console.log(id) // ajLG7xb99CsLqEb7zRGCR
          return <p key={id}> {item} </p>
        })}
      </article>
    </section>
  )
}
export default App
