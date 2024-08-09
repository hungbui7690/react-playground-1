import React from 'react'

// (3a)
const SingleColor = ({ color, index }) => {
  const { hex, weight } = color // (3b)

  // (3c) after this, check the UI >> we can see that in some dark backgrounds, we cannot see the texts >> using index to set the className
  return (
    <article
      className={index > 10 ? 'color color-light' : 'color'}
      style={{ background: `#${hex}` }}
    >
      <p className='percent-value'>{weight}%</p>
      <p className='percent-value'>#{hex}</p>
    </article>
  )
}

export default SingleColor
