import React from 'react'

// (5a) extract param
const Tour = ({ id, name, info, price, image }) => {
  // (5b)
  return (
    <article className='single-tour'>
      <img src={image} alt={name} className='img' />
      <span className='tour-price'>${price}</span>
      <div className='tour-info'>
        <h5>{name}</h5>
        <p>{info}</p>
      </div>
    </article>
  )
}

export default Tour
