/*
  Switch to Object
  - be careful, don't overwrite

      setPerson('shakeAndBake')     -> overwrite the whole object
      setPerson({ name: 'susan' })  -> overwrite the whole object
      setPerson({ ...person, name: 'susan' }) -> update just the name property


*************************

  setPerson({ ...person, name: 'susan' })
  -> setPerson({<name: peter>, age: 24, hobby: read books, <name:susan>})
  -> update person.name


*/

import { useState } from 'react'

const UseStateObject = () => {
  // 1. change 3 states into 1 object
  const [person, setPerson] = useState({
    name: 'peter',
    age: 24,
    hobby: 'read books',
  })

  // 2. update all props in object
  const displayPerson = () => {
    // setPerson('shakeAndBake') // overwrite
    // setPerson({ name: 'susan' }) // overwrite

    //  Method 1: update the whole object
    // setPerson({
    //   name: 'john',
    //   age: 28,
    //   hobby: 'scream at the computer',
    // })

    // Method 2: update just 1 property
    setPerson({ ...person, name: 'susan' })
  }

  return (
    <>
      <h3>{person.name}</h3>
      <h3>{person.age}</h3>
      <h4>Enjoys To: {person.hobby}</h4>
      <button className='btn' onClick={displayPerson}>
        show john
      </button>
    </>
  )
}

export default UseStateObject
