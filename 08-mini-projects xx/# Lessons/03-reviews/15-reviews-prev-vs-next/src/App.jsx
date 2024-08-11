/*
  Prev and Next
  - To allow the user to cycle through the reviews, you can set up buttons to display the next and previous reviews in the list. 
    > You can do this by keeping track of the current index in the reviews array, and updating the index when the user clicks the next or previous button. 
    > You can then use the updated index to access the corresponding person's review from the reviews array.

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

  // (1)
  const nextPerson = () => {
    // *** if we do this, it won't work >> since the index is 1 step behind the real index
    // if (index === people.length - 1) setIndex(0)
    // setIndex(index + 1)

    setIndex((cur) => {
      if (cur === people.length - 1) return 0
      return cur + 1
    })
  }

  const prevPerson = () => {
    setIndex((cur) => {
      if (cur === 0) return people.length - 1
      return cur - 1
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
          <button
            className='prev-btn'
            onClick={prevPerson} // (2a)
          >
            <FaChevronLeft />
          </button>
          <button
            className='next-btn'
            onClick={nextPerson} // (2b)
          >
            <FaChevronRight />
          </button>
        </div>
      </article>
    </main>
  )
}

export default App
