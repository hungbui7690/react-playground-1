/*
  useState with Array
  - create two functions
    + one that removes single item from the list
    + one that clears entire list

  *** this is the case when we need the key >> since react needs to keep track of the items in the list

  - we learned useState, should we update Backroads app (since the app renders many list)
    > actually, it depends 
      + if we need to modify the list >> update, remove, add >> then we need to use useState
      + if data does not change >> don't need to use useState

*/

import Starter from './03-useState-array'
import './index.css'

function App() {
  return (
    <div className='container'>
      <Starter />
    </div>
  )
}

export default App
