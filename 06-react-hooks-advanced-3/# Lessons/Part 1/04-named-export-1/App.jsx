/*
  Project Structure - Named Exports
  - only makes sense if you have quite a few files
    -> normally use when we work with React Router


***************************

  1. create Pages directory
    -> setup two components Home.jsx and About.jsx

  2. import both in the App.jxs


***************************

  🎫 As our pages grow, we will have a lot of imports 


*/

import About from './Pages/About' // 2. as we have more pages -> there will be many imports here
import Home from './Pages/Home'

const App = () => {
  return (
    <main>
      <Home />
      <About />
    </main>
  )
}
export default App
