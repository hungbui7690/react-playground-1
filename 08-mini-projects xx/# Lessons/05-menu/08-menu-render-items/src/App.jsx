/*
  Menu - Render Items
  - Import the menu items data from data.js into your project. This data should be an array of objects, with each object representing a menu item and containing properties such as title, price, image URL, and description.

  - State Value: 
    > Set up the menu items data as a state variable in the App.jsx component using the useState hook. 
    > This will allow you to modify the data and have those changes automatically reflected in the rendered output.

  - Render Items: 
    > Pass the menu items state value down to the Menu.jsx component. 
    > In the Menu component, iterate over the list of menu items using the map method, and for every item, render a MenuItem component.
    > In the MenuItem component, render an image element, a title, a price, and a description. You can use the data from the menu items array to fill in the information for each component.

  - create Menu.jsx & MenuItem.jsx


  *** images are in public/images

*/

import { useState } from 'react'

import Title from './Title'
import menu from './data' // (1a)
import Menu from './Menu'

const App = () => {
  const [menuItems, setMenuItems] = useState(menu) // (1b)

  // (2) pass
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
