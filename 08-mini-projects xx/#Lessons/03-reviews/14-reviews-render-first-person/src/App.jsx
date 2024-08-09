/*
  Reviews - Render First Person
  - To render the first person in the list, you can access the first item in the reviews array and use its properties to display the person's image (inline styles), name, job, and review text.

*/

import { useState } from 'react'
import {
  FaBeer,
  FaChevronLeft,
  FaChevronRight,
  FaQuoteRight,
} from 'react-icons/fa' // (1)

import people from './data'

const App = () => {
  const [index, setIndex] = useState(0)
  const { name, job, image, text } = people[index]

  // (2)
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
      </article>
    </main>
  )
}

export default App
