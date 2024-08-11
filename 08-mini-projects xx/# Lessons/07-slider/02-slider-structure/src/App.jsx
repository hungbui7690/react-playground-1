/*
  Slider - Structure
  - Figma: https://www.figma.com/file/QfMzzThSYmgabSvn4t8Yfe/Slider?node-id=0%3A1&t=IpsYjMUn3Xj3Hs3N-1

  - Import Data and Set State Value
    > Create Carousel.jsx, import all arrays from data.js and set up state value using the useState hook, use shortList as default value (for now).

  - Setup Container and Prev/Next Buttons:
    > In the return statement, set up a container element to hold all the slides. 
      + Inside the container, iterate over the people state value to create each slide.
    > Set up prev and next buttons outside the container element. 
      + You can use the onClick event to trigger functions that will change the current slide.

  - create Carousel.jsx


*/

import Carousel from './Carousel.jsx'

const App = () => {
  // (1)
  return (
    <main>
      <Carousel />
    </main>
  )
}
export default App
