import React from 'react'
import Title from './Title'
import { tours } from '../data'
import Tour from './Tour' // 4a.

const Tours = () => {
  return (
    <section className='section' id='tours'>
      <Title title='featured' subTitle='tours' />

      <div className='section-center featured-center'>
        {tours.map((tour) => {
          return (
            // 4b. to SocialLinks.js
            <Tour key={tour.id} {...tour} />
          )
        })}
      </div>
    </section>
  )
}

export default Tours
