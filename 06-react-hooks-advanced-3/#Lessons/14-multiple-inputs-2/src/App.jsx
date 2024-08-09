/*
  Multiple Inputs
  - rely heavily on Dynamic Object Keys
  - not require to use >> but we'll see it often
  - inputs must have name attribute

  *** [e.target.name]: e.target.value
      > setUser({ ...user, [e.target.name]: e.target.value })
        >> ...user : we do this just because we don't want to lose the properties 

*/

import Starter from './03-multiple-inputs'

const App = () => {
  return (
    <main>
      <Starter />
    </main>
  )
}
export default App
