/*
  Extra
  - The modulus operator in JavaScript is represented by the percent sign (%). It returns the remainder of a division operation between two numbers.

  - Overall, the flow of the application should look something like this:
    > Import the reviews data into your project as an array of objects.
    > Set up the reviews data as a state variable using the useState hook.
    > Render the first person's review in the list using their image, name, job, and text properties.
    > Set up buttons to display the next and previous reviews in the list. 
      + Keep track of the current index in the reviews array and update it when the user clicks the next or previous button.
    > Set up a button to display a random person's review. 
      + This button should select a random index in the reviews array and use it to display the corresponding person's review.

  - Alternatives: below
      1 % 4 = 1
      2 % 4 = 2
      3 % 4 = 3
      4 % 4 = 0
      10% 4 = 2

*/

import { useState } from 'react'
import {
  FaBeer,
  FaChevronLeft,
  FaChevronRight,
  FaQuoteRight,
} from 'react-icons/fa'

import people from './data'

const App = () => {
  const [index, setIndex] = useState(0)
  const { name, job, image, text } = people[index]

  const checkNumber = (num) => {
    if (num > people.length - 1) return 0
    if (num < 0) return people.length - 1
    return num
  }

  const randomPerson = () => {
    let random = Math.floor(Math.random() * people.length)
    while (index === random) random = Math.floor(Math.random() * people.length)
    setIndex(random)
  }

  const nextPerson = () => {
    setIndex((cur) => {
      return (cur + 1) % people.length // ***
    })
  }

  const prevPerson = () => {
    setIndex((cur) => {
      return (cur - 1 + people.length) % people.length // *** + people.length to pass the case cur === 0
    })
  }

  return (
    <main>
      <article className='review'>
        <div className='img-container'>
          <img src={image} alt={name} className='person-img' />
          <span className='quote-icon'>
            <FaQuoteRight />
          </span>
        </div>
        <h4 className='author'>{name}</h4>
        <p className='job'>{job}</p>
        <p className='info'>{text}</p>
        <div className='btn-container'>
          <button className='prev-btn' onClick={prevPerson}>
            <FaChevronLeft />
          </button>
          <button className='next-btn' onClick={nextPerson}>
            <FaChevronRight />
          </button>
        </div>

        {/* (1) */}
        <button className='btn btn-hipster' onClick={randomPerson}>
          Surprise
        </button>
      </article>
    </main>
  )
}

export default App
