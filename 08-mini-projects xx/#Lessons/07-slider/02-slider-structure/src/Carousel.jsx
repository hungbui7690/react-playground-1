import { useState } from 'react'
import { FaQuoteRight } from 'react-icons/fa'
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi'
import { shortList, list, longList } from './data' // (1) 3 things to import in data.js

const Carousel = () => {
  const [people, setPeople] = useState(shortList) // (2) use shortList first

  // (3c)
  const prevSlide = () => {}
  const nextSlide = () => {}

  return (
    <section className='slider-container'>
      {people.map((person) => {
        const { id, image, name, title, quote } = person // (3a)

        // (3b)
        return (
          <article className='slide' key={person.id}>
            <img src={image} alt={name} className='person-img' />
            <h5 className='name'>{name}</h5>
            <p className='title'>{title}</p>
            <p className='text'>{quote}</p>
            <FaQuoteRight className='icon' />
          </article>
        )
      })}

      {/* (3d) */}
      <button type='button' className='prev' onClick={prevSlide}>
        <FiChevronLeft />
      </button>
      <button type='button' className='next' onClick={nextSlide}>
        <FiChevronRight />
      </button>
    </section>
  )
}

export default Carousel
