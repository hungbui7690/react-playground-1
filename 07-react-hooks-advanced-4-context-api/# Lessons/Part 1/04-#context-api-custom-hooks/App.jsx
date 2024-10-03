/*
  Context API - Custom Hooks
  - Previous lesson -> UserContainer -> we need to import 2 things:
    + NavbarContext
    + useContext 

  - This lesson -> we just need to import 1 thing:
    + useAppContext()


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
