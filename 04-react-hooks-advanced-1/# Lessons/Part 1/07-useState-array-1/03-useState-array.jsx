/*
  useState with Array
  - Setup Challenge :
    -> import data
    -> setup a state value
        # people - default value equal to data
    -> display list(people) in the browser


*/

import { useState } from 'react'
import { data } from './data' // 1. import data

const UseStateArray = () => {
  const [people, setPeople] = useState(data) // 2. load data here

  return (
    <div>
      {/* 3. render the list */}
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
