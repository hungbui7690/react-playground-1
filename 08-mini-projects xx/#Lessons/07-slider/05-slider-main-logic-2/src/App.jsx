/*
  Slider - Main Logic
  - To move the slides back and forth, use the transform property with a translateX value. 
    > For example, to move the slides to the left, you can use the transform:translateX(-100%) property however to move the slides to the right, you can use the transform:translateX(100%) property. 
    > For the active slide we will use transform:translateX(0)

  (1) Carousel.jsx

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
