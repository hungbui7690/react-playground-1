import { useState } from 'react'
import { data } from './data' // (1) import data

const UseStateArray = () => {
  const [people, setPeople] = useState(data) // (2) set default value = data

  return (
    <div>
      {/* (3) render the list */}
      {people.map((person) => {
        const { id, name } = person
        return (
          <div key={id} className='item'>
            <h4>{name}</h4>
          </div>
        )
      })}
    </div>
  )
}

export default UseStateArray
