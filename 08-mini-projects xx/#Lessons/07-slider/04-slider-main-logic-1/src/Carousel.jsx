import { useState } from 'react'
import { FaQuoteRight } from 'react-icons/fa'
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi'
import { shortList, list, longList } from './data'

const Carousel = () => {
  const [people, setPeople] = useState(list) // (1) change from "shortList" to "list" >> to .css file

  const prevSlide = () => {}
  const nextSlide = () => {}

  return (
    <section className='slider-container'>
      {people.map((person) => {
        const { id, image, name, title, quote } = person

        return (
          // (3) add next-slide >> we will see all the slides will move to the right >> we had overflow:hidden in css file >> that's what we use to hide
          <article className='slide  next-slide' key={person.id}>
            <img src={image} alt={name} className='person-img' />
            <h5 className='name'>{name}</h5>
            <p className='title'>{title}</p>
            <p className='text'>{quote}</p>
            <FaQuoteRight className='icon' />
          </article>
        )
      })}

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
