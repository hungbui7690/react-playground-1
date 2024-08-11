import React from 'react'
import Tour from './Tour'

const Tours = ({ tours, removeTour }) => {
  return (
    <section>
      <div className='title'>
        <h2>Our Tours</h2>
        <div className='title-underline'></div>
        <div className='tours'>
          {tours.map((tour) => {
            return <Tour {...tour} key={tour.id} removeTour={removeTour} />
          })}
        </div>
      </div>
    </section>
  )
}

export default Tours
