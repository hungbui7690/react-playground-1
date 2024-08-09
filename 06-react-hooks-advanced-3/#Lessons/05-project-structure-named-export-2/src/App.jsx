/*
  Project Structure - Named Exports
    (1) create Pages/index.jsx

*/

import { Home, About } from './Pages' // (2) only 1 line of code

const App = () => {
  return (
    <main>
      <Home />
      <About />
    </main>
  )
}
export default App
