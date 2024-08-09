import React from 'react'

const Categories = ({ categories }) => {
  return (
    <div className='btn-container'>
      {categories.map((category) => {
        return (
          // (2) menu won't be changed >> we can use {category} as key >> end
          <button type='button' className='btn' key={category}>
            {category}
          </button>
        )
      })}
    </div>
  )
}

export default Categories
