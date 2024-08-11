import { useState } from 'react'
import { FaQuoteRight } from 'react-icons/fa'
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi'
import { shortList, list, longList } from './data'

const Carousel = () => {
  const [people, setPeople] = useState(list)

  const prevSlide = () => {}
  const nextSlide = () => {}

  return (
    <section className='slider-container'>
      {/* (1) add index param  */}
      {people.map((person, index) => {
        const { id, image, name, title, quote } = person

        return (
          // (2) add style >> after that, go to browser, scroll to right to see
          <article
            className='slide'
            key={person.id}
            style={{ transform: `translateX(${100 * index}%)` }}
          >
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
