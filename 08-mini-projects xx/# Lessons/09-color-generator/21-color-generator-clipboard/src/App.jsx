/*
  Color Generator - Clipboard
  - In the SingleColor component, set up a click handler that saves the hex value of the color to the browser clipboard.
  - To save some value in the navigator clipboard, you can use the Clipboard API, which is a part of the Web API provided by modern browsers. 
    > The Clipboard API allows web developers to interact with the user's clipboard, including reading and writing data to it.

    (1) SingleColor.jsx

  *** navigator.clipboard is async >> MDN
      > some browsers does not have this functionality >> we need to check
        + if(!navigator.clipboard)

*/

import { useState } from 'react'
import ColorList from './ColorList'
import Form from './Form'
import Values from 'values.js'

import { ToastContainer, toast } from 'react-toastify'

const App = () => {
  const [colors, setColors] = useState(new Values('#f15025').all(10))

  const addColor = (color) => {
    try {
      let newColors = new Values(color).all(10)
      setColors(newColors)
    } catch (error) {
      console.log(error.message)
      toast.error(error.message)
    }
  }

  return (
    <main>
      <Form addColor={addColor} />
      <ColorList colors={colors} />
      <ToastContainer position='top-center' />
    </main>
  )
}
export default App
