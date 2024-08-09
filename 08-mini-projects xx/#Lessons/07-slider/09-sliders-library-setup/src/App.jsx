/*
  Slider - Library
  - React Slick Docs: https://react-slick.neostack.com/
    > we don't need to reinvent to wheel >> we just need to know how to use it
    
    (1a) npm install react-slick slick-carousel --save
    (1b) npm install slick-carousel --save

    (2) create SlickCarousel.jsx component
        > then import css


  - Overall, the flow of the application should look something like this:
    - In App.jsx, import the people array from data.js and set it up as a state value using the useState hook.
    - In the return statement, set up a container element to hold all the slides, and iterate over the people state value to create each slide.
    - Set up prev and next buttons and style the container,slides and buttons.
    - Uncomment the rest of the items in the people array.
    - Create a currentPerson state value in App.jsx and set it to initially.
    - Implement the prev and next functionality using the setCurrentPerson function to update the currentPerson state value and move the slides back and forth using the transform property with a translateX value.
    - Implement the auto slide functionality using the setInterval function to change the currentPerson state value at regular intervals.

*/

import SlickCarousel from './SlickCarousel.jsx'

const App = () => {
  // (5) go to index.css to setup
  return (
    <main>
      <SlickCarousel />
    </main>
  )
}
export default App
