/*
  Context API - Challenge

************************

  Challenge
  - create three components and nest them in such way :
  - Navbar.jsx
    - NavLinks.jsx (nested in Navbar)
      - UserContainer.jsx (nested in NavLinks)

    -> Logo    Links        Hello,X
    -> h5      NavLinks     UserContainer


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
