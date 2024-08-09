/*
  Grocery Bud - Render List
  - Render List
    > Create two new components: Items and SingleItem. In Items, iterate over the list of items and render each one in a SingleItem component. 
    > For now, only render the name of the item.

*/

import { useState } from 'react'
import Form from './Form'
import Items from './Items' // (1)
import { nanoid } from 'nanoid'

const App = () => {
  const [items, setItems] = useState([])

  const addItem = (itemName) => {
    const newItem = {
      name: itemName,
      completed: false,
      id: nanoid(),
    }
    const newItems = [...items, newItem]
    setItems(newItems)
  }

  const removeItem = (id) => {}

  return (
    <section className='section-center'>
      <Form addItem={addItem} />

      {/* (2) */}
      <Items items={items} removeItem={removeItem} />
    </section>
  )
}

export default App
