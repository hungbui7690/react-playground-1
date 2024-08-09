/*
  Context API - Prop Drilling
  - in Navbar.jsx setup
    > user state value
      + default value {name:'something'}
    > logout function
      + set user back to null
  - pass both of them down to UserContainer.jsx
  - display user and button
  - on button click set user back to null
  
  - extra challenge:
    > if user null, in UserContainer display <p>please login</p>

  *** This lesson, we use Prop Drilling

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
