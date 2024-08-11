/*
  Birthday Buddy - Render List
  - Iterate and Render: 
    > Display the number of items in the list by using the length property of the state variable. 
      + This information can be displayed using plain text or added to a message or heading element.
    > To render the list of people, iterate over the data array using the map method. For each item in the array, render an image element (hint : use inline styles to make width smaller).Additionally, render the person's name and age as plain text.
    > Create a List component to hold the rendered items. 
      + This component can be a simple div element containing the list of Person components.
    > Create a Person component to render the information for each person. 
      + This component should receive the person data as props and render the image, name, and age information.

*/

import { useState } from 'react'
import data from './data.js'
import List from './List.jsx' // (1a)

const App = () => {
  const [people, setPeople] = useState(data)
  console.log(people)

  // (1b) go to List
  return (
    <main>
      <section className='container'>
        <h3>{people.length} birthdays today</h3>
        <List people={people} />
      </section>
    </main>
  )
}
export default App
