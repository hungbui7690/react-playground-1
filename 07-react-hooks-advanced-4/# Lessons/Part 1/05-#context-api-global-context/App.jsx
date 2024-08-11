/*
  Context API - Global Context
  - similar to normal context api -> but we use {children}
  - share data to all places in our app


***************************

  - in src create context.jsx
  - setup a global context - GlobalContext
  - setup a component (AppContext) with one state value
  - return GlobalContext.Provider from AppContext
  - wrap then entire application (main.jsx) - children prop "gotcha"
  - setup a custom hook
  - access in App.jsx
  - log result


***************************

  1. create context.jsx


*/

import { useGlobalContext } from './context'

const App = () => {
  const { name } = useGlobalContext() // 8.
  console.log(name)

  return <main>App</main>
}
export default App
