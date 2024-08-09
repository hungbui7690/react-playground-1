/*
  Random
  - To allow the user to display a random person's review, you can set up a button with functionality to randomly select an index in the reviews array.
    > You can then use the selected index to display the corresponding person's review.

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

  // (2)
  const randomPerson = () => {
    // const random = Math.random() // 0 to 0.99999
    // const random = Math.random() * people.length // 0 to 3.9999999
    let random = Math.floor(Math.random() * people.length) // 0 to 3

    while (index === random) random = Math.floor(Math.random() * people.length) // don't show duplication
    setIndex(random)
  }

  const nextPerson = () => {
    setIndex((cur) => {
      return checkNumber(cur + 1)
    })
  }

  const prevPerson = () => {
    setIndex((cur) => {
      return checkNumber(cur - 1)
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
