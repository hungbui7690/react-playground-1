/*
  Context API - Global Context
  - {children}
  - share data to all places in our app

  (1) create context.jsx

*/

import { useGlobalContext } from './context'

const App = () => {
  const { name } = useGlobalContext()
  console.log(name)

  return <main>App</main>
}
export default App
