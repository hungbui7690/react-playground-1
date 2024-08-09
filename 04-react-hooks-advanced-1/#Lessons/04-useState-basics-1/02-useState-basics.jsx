import { useState } from 'react' // (1)

const UseStateBasics = () => {
  // (2a)
  // console.log(useState()) // [undefined, ƒ]

  // (2b)
  // console.log(useState('bob')) // ['bob', ƒ]

  // (2c) because we're getting back array >> we can do this
  const value = useState()[0]
  const handler = useState()[1]
  console.log(value, handler)

  return (
    <div>
      <h2>useState basics</h2>
    </div>
  )
}

export default UseStateBasics
