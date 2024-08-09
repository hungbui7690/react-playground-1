import React, { useState } from 'react'

const Tour = ({ id, name, info, price, image, removeTour }) => {
  const [isReadMore, setIsReadMore] = useState(false) // (1)

  // console.log(info.substring(0, 50)) // *** substring !== subString

  return (
    <article className='single-tour'>
      <img src={image} alt={name} className='img' />
      <span className='tour-price'>${price}</span>
      <div className='tour-info'>
        <h5>{name}</h5>

        {/* (2a) step 1 */}
        {/* <p>{isReadMore ? info : `${info.substring(0, 170)}...`}</p> */}

        {/* (2b) step 2: add button between <p> tags */}
        <p>
          {isReadMore ? info : `${info.substring(0, 170)}...`}
          <button
            type='button'
            className='info-btn'
            onClick={() => setIsReadMore(!isReadMore)}
          >
            {isReadMore ? 'Show Less' : 'Read More'}
          </button>
        </p>

        <button
          type='button'
          className='btn btn-block delete-btn'
          onClick={() => removeTour(id)}
        >
          not interested
        </button>
      </div>
    </article>
  )
}

export default Tour
