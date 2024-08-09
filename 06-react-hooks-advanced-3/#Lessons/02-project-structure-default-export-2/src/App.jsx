/*
  Project Structure - Default Export
  - import Final from 'pathToFolder/Navbar/Navbar' 

  - First solution is to create Navbar/index.js
    > copy code from Navbar.jsx to index.jsx 
      + so now we can import like this: 
        - import Navbar from './Navbar'
    > Works but eventually too many index tabs >> hard to navigate

*/

import Navbar from './Navbar'
const App = () => {
  return <main>Project Structure</main>
}
export default App
