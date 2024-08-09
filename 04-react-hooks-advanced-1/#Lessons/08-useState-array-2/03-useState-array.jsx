import { useState } from 'react'
import { data } from './data'

const UseStateArray = () => {
  const [people, setPeople] = useState(data)

  // (2)
  const removeItem = (id) => {
    let newPeople = people.filter((person) => person.id !== id)
    setPeople(newPeople)
  }

  const clearItems = () => {
    setPeople([])
  }

  return (
    <div>
      {people.map((person) => {
        const { id, name } = person
        return (
          <div key={id} className='item'>
            <h4>{name}</h4>
            <button
              onClick={() => removeItem(id)} // (1) arrow function to avoid invoking function
            >
              Remove
            </button>
          </div>
        )
      })}
      <button
        className='btn'
        style={{ marginTop: '2rem' }}
        onClick={() => setPeople([])} // (3) instead of creating function outside, we can write it here
      >
        Clear Items
      </button>
    </div>
  )
}

export default UseStateArray
