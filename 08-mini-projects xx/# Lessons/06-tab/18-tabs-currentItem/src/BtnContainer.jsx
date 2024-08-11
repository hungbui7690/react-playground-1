import React from 'react'

// (4a)
const BtnContainer = ({ jobs, currentItem, setCurrentItem }) => {
  return (
    <div className='btn-container'>
      {jobs.map((item, index) => {
        return (
          <button
            key={item.id}
            className={index === currentItem ? 'job-btn active-btn' : 'job-btn'}
            onClick={() => setCurrentItem(index)} // (4b) we need to use index here > not item.id
          >
            {item.company}
          </button>
        )
      })}
    </div>
  )
}

export default BtnContainer
