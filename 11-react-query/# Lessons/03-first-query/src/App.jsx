/*
  First Query
  - Query Key
    > The unique key you provide is used internally for refetching, caching, and sharing your queries throughout your application.

  - Query Function
    > A query function can be literally any function that returns a promise. The promise that is returned should either resolve the data or throw an error.

    (1) Items.jsx

  *** useQuery() returns a lot of properties (isError, isFetched, isLoading...) and methods
    > real data is from "data.data"

  *** React Query is also the "state management library" 
    >> with this, we don't have to use context
    >> we don't have to setup the states in App.jsx and pass them down

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
