/*
  Refactor

*************************

  1. App.js


*/

import { ToastContainer } from 'react-toastify'
import Form from './Form'
import Items from './Items'

// 1a. we don't need this anymore
// const defaultItems = [
//   { id: nanoid(), title: 'walk the dog', isDone: false },
//   { id: nanoid(), title: 'wash dishes', isDone: false },
//   { id: nanoid(), title: 'drink coffee', isDone: true },
//   { id: nanoid(), title: 'take a nap', isDone: false },
// ]

const App = () => {
  return (
    <section className='section-center'>
      <ToastContainer position='top-center' />
      <Form />

      {/* 1b. no need to pass -> create reactQueryCustomHooks.jsx */}
      <Items />
    </section>
  )
}

export default App
