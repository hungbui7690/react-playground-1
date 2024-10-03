/*
  Context API - Solution
  - context api contains:
    + consumer
    + provider


*************************

  1. createContext 
  2. wrap context.Provider around the component 
    -> <NavbarContext.Provider>
  3. passing values 
    -> <NavbarContext.Provider value={{ user, logout }}>
  4. get the passing values -> useContext



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
