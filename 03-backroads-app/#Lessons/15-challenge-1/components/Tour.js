import React from 'react'

// (3a)
const Tour = ({
  id,
  img,
  date,
  title,
  description,
  icon,
  country,
  days,
  price,
}) => {
  // (3b) to Tours.js
  return (
    <article className='tour-card' key={id}>
      <div className='tour-img-container'>
        <img src={img} className='tour-img' alt='' />
        <p className='tour-date'>{date}</p>
      </div>
      <div className='tour-info'>
        <div className='tour-title'>
          <h4>{title}</h4>
        </div>
        <p>{description}</p>
        <div className='tour-footer'>
          <p>
            <span>
              <i className={icon}></i>
            </span>{' '}
            {country}
          </p>
          <p>{days}</p>
          <p>{price}</p>
        </div>
      </div>
    </article>
  )
}

export default Tour
