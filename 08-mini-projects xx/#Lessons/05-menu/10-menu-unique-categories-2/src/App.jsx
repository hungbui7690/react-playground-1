/*
  Menu - Unique Categories
  - In the App.jsx component, set up functionality to get only the unique categories from the menu items data and store them in a separate array. 
    > Add an "all" category to this array to display all menu items.



*/

import { useState } from 'react'
import Title from './Title'
import menu from './data'
import Menu from './Menu'

//////////////////////////////
// (1) get all unique categories + add 'all'
//////////////////////////////
// Method 1:
// const tempCategories = menu.map((item) => item.category)
// const tempSet = new Set(tempCategories)
// const allCategories = ['all', ...tempSet]

// Method 2
const allCategories = ['all', ...new Set(menu.map((item) => item.category))]

//////////////////////////////
const App = () => {
  const [menuItems, setMenuItems] = useState(menu)
  const [categories, setCategories] = useState(allCategories) // (2) pass allCategories here >> done

  return (
    <main>
      <section className='menu'>
        <Title text='Our Menu' />
        <Menu menuItems={menuItems} />
      </section>
    </main>
  )
}

export default App
