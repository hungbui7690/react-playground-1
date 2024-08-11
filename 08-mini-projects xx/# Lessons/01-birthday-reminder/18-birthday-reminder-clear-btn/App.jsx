/*
  Birthday Buddy - Clear List
  - In App.jsx, add a button to clear the list, and set up the functionality by defining a function that resets the state variable to an empty array.

  - Overall, the flow of the application should look something like this:
    > Import the data you want to render in App.jsx.
    > Set up the data as a state variable using useState.
    > Use the map method to iterate over the data array and render a Person component for each person.
    > Each Person component should render an image with a style prop to control the width, the person's name, and the person's age.
    > Create a List component that holds the rendered items.
    > Create a button with functionality to clear the list.
    > Display the number of items in the list using the length property of the state variable. This can be rendered using plain text or added to a message or heading element.

*/

import { useState } from 'react'
import data from './data.js'
import List from './List.jsx'

const App = () => {
  const [people, setPeople] = useState(data)

  // (2)
  function clearList() {
    setPeople([])
  }

  return (
    <main>
      <section className='container'>
        <h3>{people.length} birthdays today</h3>
        <List people={people} />

        {/* (1) */}
        <button type='button' className='btn btn-block' onClick={clearList}>
          Clear All
        </button>
      </section>
    </main>
  )
}
export default App
