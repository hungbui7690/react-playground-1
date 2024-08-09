/*
  Birthday Buddy - Design Idea 
  - https://uidesigndaily.com/
  - https://uidesigndaily.com/posts/sketch-birthdays-list-card-widget-day-1042

  Birthday - Import List
  - PIC >> requirement
  - Figma: https://www.figma.com/file/e2vsLe9DMnXZIygNHkwGL1/Birthday-buddy?node-id=0%3A1&t=AGNWdO5QQGOoNCfD-1

  - Import Data:
    > In App.jsx, import the data (from data.js) to be rendered as an array of objects. Each object should represent a person and contain properties such as name, age, and image URL.
  - Setup State Variable:
    > Then, set up the data as a state variable using the useState hook. This will allow the data to be modified and have those changes automatically reflected in the rendered output.


*/

import { useState } from 'react'
import data from './data.js' // (1)

const App = () => {
  const [people, setPeople] = useState(data) // (2)
  console.log(people)

  return <h2>Birthday Reminder - Starter</h2>
}
export default App
