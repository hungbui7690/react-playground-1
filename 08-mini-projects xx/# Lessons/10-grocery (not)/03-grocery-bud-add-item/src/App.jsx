/*
  Grocery Bud - Add Item
  - Add Item:
    > If the form is submitted with a value, create a new item object that includes a name (taken from the form input), a completed property (default value false), and a unique id (generated using a library like uuid or nanoid).
    > Add the new item to the items state variable using the setItems function.

*/

import { useState } from 'react'
import Form from './Form'
import { nanoid } from 'nanoid'

const App = () => {
  const [items, setItems] = useState([])

  // (1)
  const addItem = (itemName) => {
    const newItem = {
      name: itemName,
      completed: false,
      id: nanoid(), // *** use nanoid here
    }
    const newItems = [...items, newItem]
    setItems(newItems)
  }

  return (
    <section className='section-center'>
      {/* (2) pass */}
      <Form addItem={addItem} />
    </section>
  )
}

export default App
