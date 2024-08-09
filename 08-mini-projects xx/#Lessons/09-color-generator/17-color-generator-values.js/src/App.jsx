/*
  Color Generator - Values.js
  - Install the values.js library and use it to generate a list of colors in the App component.
  
  - Values.js Library: https://github.com/noeldelgado/values.js/blob/master/README.md

  *** npm i values.js
      > import Values from 'values.js'
      > new Values('#f15025').all(10) 
        + .all(): return array of colors
        
  *** check the colors that generated in the log >> we can see that they don't have IDs
      >> we can use uuid or Nanoid to generate id for us 

*/

import { useState } from 'react'
import ColorList from './ColorList'
import Form from './Form'
import Values from 'values.js' // (a)

const App = () => {
  const [colors, setColors] = useState(new Values('#f15025').all(10)) // (b)

  return (
    <main>
      <Form />
      <ColorList />
    </main>
  )
}
export default App
