/*
  Color Generator - React-Toastify
  - Import and set up the react-toastify library.
  - React Toastify: https://fkhadra.github.io/react-toastify/introduction

    *** npm i react-toastify
        > import 'react-toastify/dist/ReactToastify.css' >> main.jsx (1)
        > import { ToastContainer, toast } from 'react-toastify' >> App.jsx (2)
          + toast.success('awesome')
          + toast.error('error message')

*/

import { useState } from 'react'
import ColorList from './ColorList'
import Form from './Form'
import Values from 'values.js'

import { ToastContainer, toast } from 'react-toastify' // (2)

const App = () => {
  const [colors, setColors] = useState(new Values('#f15025').all(10))

  // (4)
  // toast.error('error')
  // toast.success('success')

  return (
    <main>
      <Form />
      <ColorList colors={colors} />

      {/* (3) */}
      <ToastContainer position='top-center' />
    </main>
  )
}
export default App
