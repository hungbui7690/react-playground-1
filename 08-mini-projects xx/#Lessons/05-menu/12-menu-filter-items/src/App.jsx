/*
  Menu - Filter Functionality
  - Set up filter functionality where once the user clicks on the button, only the menu items that belong to the selected category are displayed. 
    > To do this, define a function that takes a category as a parameter and updates the state to show only the menu items that belong to that category. 
      + You can then pass this function down to the Categories component as a prop, and attach it to the buttons.

  - When the user clicks on a category button, the filter function should be called with the selected category as a parameter. 
    > The function should then update the state to show only the menu items that belong to the selected category.

  - Overall, the flow of the application should look something like this:
    > Create a Title component to display the app title.
    > Import the menu items data from data.js into your project.
    > Set up the menu items data as a state variable in the App.jsx component.
    > Pass the menu items state value down to the Menu.jsx component and render a MenuItem component for each item in the menu items array.
    > In the MenuItem component, display the image, title, price, and description.
    > Set up functionality to get only the unique categories from the menu items data and store them in a separate array, including an "all" category to display all menu items.
    > Set up the categories array as a state variable in the App.jsx component.
    > Create a Categories component and render a button for each category in the categories array.
    > Define a function that takes a category as a parameter and updates the state to show only the menu items that belong to that category.
    > Attach the filter function to the category buttons in the Categories component.
    > Repeat steps 9-10 until the user has selected a different category or chooses to exit the Menu component.

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

  // (1)
  const filterItems = (category) => {
    // (a)
    if (category === 'all') {
      setMenuItems(menu)
      return
    }

    // (b) IMPORTANT: use menu (from data) to filter >> NOT use menuItems (state) to filter
    const newItems = menu.filter((item) => item.category === category)
    setMenuItems(newItems)
  }

  // (2) pass
  return (
    <main>
      <section className='menu'>
        <Title text='Our Menu' />
        <Categories categories={categories} filterItems={filterItems} />
        <Menu menuItems={menuItems} />
      </section>
    </main>
  )
}

export default App
