/*
  Context API - Prop Drilling
  1. Navbar.jsx -> setup
    -> user state value -> default value {name:'something'}
    -> logout function  -> set user back to null


************************

  2. pass both of them down from Navbar.jsx to UserContainer.jsx
  3. display user and button
  4. on button click set user back to null


************************

  Extra Challenge:
  - if user null, in UserContainer display <p>please login</p>

  🎎 This lesson, we use Prop Drilling


*/

import Navbar from './components/Navbar'

const App = () => {
  return (
    <main>
      <Navbar />
    </main>
  )
}
export default App
