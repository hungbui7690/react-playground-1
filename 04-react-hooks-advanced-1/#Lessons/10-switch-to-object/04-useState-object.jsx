import { useState } from 'react'

const UseStateObject = () => {
  // (1) change 3 states into 1 (object)
  const [person, setPerson] = useState({
    name: 'peter',
    age: 24,
    hobby: 'read books',
  })

  // (2) update all props in object
  const displayPerson = () => {
    /* (b) overwrite */
    // setPerson('shakeAndBake')
    /* (b) overwrite */
    // setPerson({ name: 'susan' })
    /* (c) method 1: update the whole object */
    // setPerson({
    //   name: 'john',
    //   age: 28,
    //   hobby: 'scream at the computer',
    // })
    /* (d) method 2: update just 1 property */
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
