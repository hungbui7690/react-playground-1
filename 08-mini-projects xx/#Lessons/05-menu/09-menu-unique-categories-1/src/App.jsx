/*
  Menu - Unique Categories
  - In the App.jsx component, set up functionality to get only the unique categories from the menu items data and store them in a separate array. 
    > Add an "all" category to this array to display all menu items.
      - Hint : new Set ()
        >> add()
        >> .size property
        >> has()
        >> delete()
        >> Array.from(uniqueSet) >> convert to array

*/

import { useState } from 'react'
import Title from './Title'
import menu from './data'
import Menu from './Menu'

//////////////////////////////
// Vanilla JS: In JavaScript, the Set object is a collection of unique values. It allows you to store values of any type, such as primitive types (numbers, strings, booleans) and object references.
//////////////////////////////
// Create a new set
let mySet = new Set()

// Add values to the set
mySet.add(1)
mySet.add(2)
mySet.add(3)

mySet.add(1) // Add a duplicate value (ignored)
console.log('size: ', mySet.size) // Get the size of the set (3)
console.log('has :', mySet.has(2)) // Check if a value is in the set (true)
mySet.delete(2) // Remove a value from the set

let myArray = Array.from(mySet) // Get an array of all values in the set
console.log(myArray) // [1, 3]

//////////////////////////////
const App = () => {
  const [menuItems, setMenuItems] = useState(menu)

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
