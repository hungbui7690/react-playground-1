import { useState } from 'react'

const UseStateObject = () => {
  const [name, setName] = useState('peter') // (1) setup states
  const [age, setAge] = useState(24)
  const [hobby, setHobby] = useState('read books')

  // (2)
  const displayPerson = () => {
    setName('john')
    setAge(28)
    setHobby('scream at the computer')
  }

  return (
    <>
      <h3>{name}</h3>
      <h3>{age}</h3>
      <h4>Enjoys To: {hobby}</h4>
      <button
        className='btn'
        onClick={displayPerson} // (3)
      >
        show john
      </button>
    </>
  )
}

export default UseStateObject
