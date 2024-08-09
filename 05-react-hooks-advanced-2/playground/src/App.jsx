/*
  User Challenge
  - create state value
    > user - default value null
  - create two functions
    > login - set's user equal to object with name property
    > logout - set's user equal to null
  - in jsx use ? to display two different setups
    > h4 with "hello there, user name" and logout button
    > h4 with "please login " and login button

  *** use ternary operator

*/

import Starter from './07-user-challenge'
import './index.css'

function App() {
  return (
    <div className='container'>
      <Starter />
    </div>
  )
}

export default App
