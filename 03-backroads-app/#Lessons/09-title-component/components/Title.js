import React from 'react'

const Title = ({ title, subTitle }) => {
  // (1) About.js
  return (
    <div className='section-title'>
      <h2>
        {title} <span>{subTitle}</span>
      </h2>
    </div>
  )
}
export default Title
