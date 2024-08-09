/*
  Project Structure - Default Export
  - another solution

  - go to Navbar/index.jsx and use import / export
    > export { default } from './Navbar'


*/

import Navbar from './Navbar'

const App = () => {
  return (
    <main>
      <Navbar />
    </main>
  )
}
export default App
