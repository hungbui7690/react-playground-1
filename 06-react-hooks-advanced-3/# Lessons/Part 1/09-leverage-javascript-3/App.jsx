/*
  Leverage Javascript


***************************

  1. Person.jsx


***************************

  - Combining with the nullish coalescing operator ??
    -> ??: nullish coalescing operator: null or undefined

      const img = images?.[0]?.small?.url ?? avatar
      -> when the left side is "null" or "undefined" -> return avatar
        

      const img = images?.[0]?.small?.url || avatar
      -> when the left side is "falsy" -> return avatar


*/

import List from './List'

const App = () => {
  return (
    <main>
      <List />
    </main>
  )
}
export default App
