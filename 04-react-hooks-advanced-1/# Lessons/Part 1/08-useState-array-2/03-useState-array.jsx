/*
  useState with Array
  - create two functions
    + one that removes single item from the list
    + one that clears entire list

  ⛳ this is the case when we need the key -> since react needs to keep track of the items in the list


*****************************

  🎐 we've learned useState, should we update Backroads app (since the app renders many list)
    -> actually, it depends 
      # if we need to modify the list -> update, remove, add -> then we need to use useState
      # if data does not change -> don't need to use useState


*/

import { useState } from 'react'
import { data } from './data'

const UseStateArray = () => {
  const [people, setPeople] = useState(data)

  // 2.
  const removeItem = (id) => {
    let newPeople = people.filter((person) => person.id !== id)
    setPeople(newPeople)
  }

  return (
    <div>
      {people.map((person) => {
        const { id, name } = person
        return (
          <div key={id} className='item'>
            <h4>{name}</h4>
            <button
              onClick={() => removeItem(id)} // 1. arrow function to avoid invoking function
            >
              Remove
            </button>
          </div>
        )
      })}
      <button
        className='btn'
        style={{ marginTop: '2rem' }}
        onClick={() => setPeople([])} // 3. instead of creating function outside, we can write it here
      >
        Clear Items
      </button>
    </div>
  )
}

export default UseStateArray
