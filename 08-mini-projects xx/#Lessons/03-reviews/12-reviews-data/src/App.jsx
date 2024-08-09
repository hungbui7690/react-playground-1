/*
  Reviews - Data
  - pic >> requirement
  - Figma: https://www.figma.com/file/e8L2QiR4GVTa5cGuRpXtk3/Reviews?node-id=0%3A1&t=gcCYcePiKxnkJ9kH-1
  - Explore Data: 
    > Navigate to data.js and take a look at the data structure
  - Import Reviews: 
    > First, import the reviews data into your project. This data should be an array of objects, with each object representing a person's review and containing properties such as name, job, image URL, and text.
  - Setup State Value (Index):
    > Then, set up a state value that controls which person from the list is displayed.

  *** when we click next/prev >> we will change the index to see the next/prev person >> that's why we need the index


*/

import { useState } from 'react'
import people from './data' // (1)

const App = () => {
  const [index, setIndex] = useState(0) // (2)
  const { name, job, image, text } = people[index] // (3) this is why we need the index >> check requirement: when we click on next/prev buttons, it will change the people >> we need to use the index the correct person
  console.log(name)

  return <h2>Reviews Starter</h2>
}

export default App
