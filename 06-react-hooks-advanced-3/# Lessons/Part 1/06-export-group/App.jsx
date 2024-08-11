/*
  Project Structure - Export Group


**************************

  1. create Example directory
    -> setup two components (setup simple returns) and index.jsx file

  2. create Example/index.jsx setup return and render both components (import)

  3. import/render index.jsx in App.jsx


***************************

  - Extensions -> pic
    + Code Spell Checker
    + Glean


*/

import { Test } from './Test'
import Example from './Example'

const App = () => {
  return (
    <main>
      <Example />

      <Test />
    </main>
  )
}
export default App
