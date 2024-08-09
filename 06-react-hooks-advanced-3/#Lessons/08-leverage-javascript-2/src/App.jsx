/*
  Leverage Javascript
  - Setup Challenge
    - take a look at the people in array in data.js
      > we can see that some properties exists in one object, but some properties do not
      > it happens a lot in the real work when we work with API 

    (1) create List.jsx component
        > in List.jsx import and iterate over people (data)
        > for now just render name

    (2) once you have list setup separate Person.jsx component
        - try glean extension
        - in Person render
          > name, nickName, image
    
    > Yes, there will be a bug since some object does not contain properties


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
