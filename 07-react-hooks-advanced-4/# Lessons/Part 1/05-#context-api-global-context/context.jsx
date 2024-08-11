import { useState, useContext, createContext } from 'react'

const GlobalContext = createContext() // 1. create context

export const useGlobalContext = () => useContext(GlobalContext) // 5. custom hook

// 2. must extract props:{children}
const AppContext = ({ children }) => {
  const [name, setName] = useState('peter') // 3.

  // 4. wrap and share data
  return (
    <GlobalContext.Provider value={{ name: name, setName }}>
      {children}
    </GlobalContext.Provider>
  )
}

export default AppContext // 6. go to main.jsx
