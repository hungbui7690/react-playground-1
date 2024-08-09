import { useState, useContext, createContext } from 'react'

const GlobalContext = createContext() // (1a)

export const useGlobalContext = () => useContext(GlobalContext) // (1f)

// (1b) must extract props:{children}
const AppContext = ({ children }) => {
  const [name, setName] = useState('peter') // (1c)

  // (1d)
  return (
    <GlobalContext.Provider value={{ name: name, setName }}>
      {children}
    </GlobalContext.Provider>
  )
}

export default AppContext // (1e) go to main.jsx
