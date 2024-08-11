/*
  Color Generator - Create Color
  - In the App component, create logic to generate a new list of colors when the user submits a new color value. 
  - Use react-toastify to display an error message if the values.js library cannot generate a color, and also display a toast message if the user tries to submit an empty value.

  *** console.log(error.message) !== console.log(error)

*/

import { useState } from 'react'
import ColorList from './ColorList'
import Form from './Form'
import Values from 'values.js'

import { ToastContainer, toast } from 'react-toastify'

const App = () => {
  const [colors, setColors] = useState(new Values('#f15025').all(10))

  // (1) wrong color code >> it will catch err for us
  const addColor = (color) => {
    try {
      let newColors = new Values(color).all(10) // *** if we change the # here, it will changes the number of colors >> so that we need to work on the css again >> className={index > 10 ? 'color color-light' : 'color'}
      setColors(newColors)
    } catch (error) {
      console.log(error.message)
      toast.error(error.message)
    }
  }

  // (2) pass to Form
  return (
    <main>
      <Form addColor={addColor} />
      <ColorList colors={colors} />
      <ToastContainer position='top-center' />
    </main>
  )
}
export default App
