import React from 'react'
import Tour from './Tour'

const Tours = ({ tours }) => {
  // (4)
  return (
    <section>
      <div className='title'>
        <h2>Our Tours</h2>
        <div className='title-underline'></div>
        <div className='tours'>
          {tours.map((tour) => {
            // (5) go to Tour.jsx
            return <Tour {...tour} key={tour.id} />
          })}
        </div>
      </div>
    </section>
  )
}

export default Tours
