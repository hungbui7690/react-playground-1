/*
  Reviews - React Icons
  - pic
  - https://react-icons.github.io/react-icons/
    > npm install react-icons --save

*/

import { useState } from 'react'
import { FaBeer } from 'react-icons/fa' // (1)
import people from './data'

const App = () => {
  const [index, setIndex] = useState(0)
  const { name, job, image, text } = people[index]

  return (
    <div>
      <h2>Reviews Starter</h2>

      {/* (2) <FaBeer /> >> className is where we use to set the style */}
      <FaBeer className='beer' />
    </div>
  )
}

export default App
