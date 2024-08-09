/*
  Leverage Javascript
  - Setup Challenge
    - take a look at the people in array in data.js
      > we can see that some properties exists in one object, but some properties do not
      > it happens a lot in the real work when we work with API 

    (1) Person.jsx

  ***
  - Combining with the nullish coalescing operator ??
  - ??: nullish coalescing operator: null or undefined

    > const img = images?.[0]?.small?.url ?? avatar
      > when the left side is "null" or "undefined" 
        > return avatar

    > const img = images?.[0]?.small?.url || avatar
      + when the left side is "falsy" 
        > return avatar

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
