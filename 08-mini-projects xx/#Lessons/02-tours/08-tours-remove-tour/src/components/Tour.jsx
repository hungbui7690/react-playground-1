import React from 'react'

// (4a) extract removeTour
const Tour = ({ id, name, info, price, image, removeTour }) => {
  return (
    <article className='single-tour'>
      <img src={image} alt={name} className='img' />
      <span className='tour-price'>${price}</span>
      <div className='tour-info'>
        <h5>{name}</h5>
        <p>{info}</p>
        <button
          type='button'
          className='btn btn-block delete-btn'
          onClick={() => removeTour(id)} // (4b)
        >
          not interested
        </button>
      </div>
    </article>
  )
}

export default Tour
