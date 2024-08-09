import React, { useState } from 'react' // (1) needs to import React

// useState('hello') // (3) err >> hook must be run inside component

const UseStateBasics = () => {
  const [count, setCount] = useState(0)

  const [name, setName] = React.useState('huron') // (2) another method

  // (4) don't do this
  // if(false){
  //   const [age, setAge] = useState(19)
  // }

  const handleClick = () => {
    setCount(count + 1)
    console.log(count) // (5) set functions don't update state immediately
  }

  return (
    <div>
      <h4>You clicked {count} times</h4>
      <button className='btn' onClick={handleClick}>
        Click me
      </button>
    </div>
  )
}

export default UseStateBasics
