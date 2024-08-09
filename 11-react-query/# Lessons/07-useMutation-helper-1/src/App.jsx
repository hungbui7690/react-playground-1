/*
  useMutation Helper Options
  - useMutation comes with some helper options that allow quick and easy side-effects at any stage during the mutation lifecycle. 
    > These come in handy for both invalidating and refetching queries after mutations

  *** toast.error(error.response.data.msg)
    > "error" is an object, and we cannot pass that to toast.error 
    > "error.response.data.msg" is the string that we get from server

  *** with useEffect() we need to re-fetch to get the latest data
    > it is simple with react query >> it will re-fetch the tasks for us 
*/

import { ToastContainer } from 'react-toastify'
import { nanoid } from 'nanoid'
import Form from './Form'
import Items from './Items'
import { useState } from 'react'

const defaultItems = [
  { id: nanoid(), title: 'walk the dog', isDone: false },
  { id: nanoid(), title: 'wash dishes', isDone: false },
  { id: nanoid(), title: 'drink coffee', isDone: true },
  { id: nanoid(), title: 'take a nap', isDone: false },
]

const App = () => {
  const [items, setItems] = useState(defaultItems)
  return (
    <section className='section-center'>
      <ToastContainer position='top-center' />
      <Form />
      <Items items={items} />
    </section>
  )
}
export default App
