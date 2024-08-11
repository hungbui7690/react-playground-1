/*
  Slider - Setup CSS
  - Use CSS to style the container and slides. 
    > Set the container to position:relative and the slides and prev/next buttons to position:absolute. 
    > You can also set the width and height of the container and slides to control their size.

  - Switch default value in people state value. Set it equal to list or longList


  - go to css file >> remove the styles for === PROJECT CSS ===
  - add css
  - after that, go to Carousel >> state: use default value = list instead of shortList to see 
    > we can see that each slide is on top of each other 
      >> that is because we use position: absolute

*/

import Carousel from './Carousel.jsx'

const App = () => {
  return (
    <main>
      <Carousel />
    </main>
  )
}
export default App
