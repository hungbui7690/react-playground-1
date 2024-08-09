/*
  Project Structure - Default Export
  - Normally somewhere in the src, we will setup like this
    > /components/componentName.jsx
    > /screens/componentName.jsx
  - But as our project grows, we need more approaches

    > Setup every component as a folder
      - create navbar folder
        + setup Navbar.jsx (component)
        + Navbar.css (styles)
      - import in App.jsx

*/

import Navbar from './Navbar/Navbar' // (2) here we have Navbar/Navbar >> and we don't want that to be happened

const App = () => {
  return <main>Project Structure</main>
}
export default App
