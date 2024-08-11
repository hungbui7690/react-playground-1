/*
  Menu - State Value and Render Categories
  - Set up the categories array as a state variable in the App.jsx component using the useState hook. 
    > This will allow you to modify the data and have those changes automatically reflected in the rendered output.
  - Create a Categories component and pass the categories state value down to this component. 
    > In the Categories component, iterate over the categories array and render buttons for each category.


  - create Categories.jsx
*/

import { useState } from 'react'
import Title from './Title'
import menu from './data'
import Menu from './Menu'
import Categories from './Categories'

const allCategories = ['all', ...new Set(menu.map((item) => item.category))]

const App = () => {
  const [menuItems, setMenuItems] = useState(menu)
  const [categories, setCategories] = useState(allCategories)

  return (
    <main>
      <section className='menu'>
        <Title text='Our Menu' />

        {/* (1) */}
        <Categories categories={categories} />

        <Menu menuItems={menuItems} />
      </section>
    </main>
  )
}

export default App
