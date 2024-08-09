/*
  useSelector
  - use to access store values 

  (1) create components/Navbar.js

  *** install Redux Devtools
    > pic
    > with this, when we dispatch actions >> we can clearly see how the states change

  *** Hero Icons: https://heroicons.com/
    > we use Hero Icons in this project
    > nav svg {
        width: 40px;
        color: var(--clr-white);
      }

*/

import Navbar from './components/Navbar'

function App() {
  return (
    <main>
      <Navbar />
    </main>
  )
}
export default App
