import React from 'react'

// (3a)
const Categories = ({ categories, filterItems }) => {
  return (
    <div className='btn-container'>
      {categories.map((category) => {
        return (
          <button
            type='button'
            className='btn'
            key={category}
            onClick={() => filterItems(category)} // (3b)
          >
            {category}
          </button>
        )
      })}
    </div>
  )
}

export default Categories
