/*
  Lower the State 
  - Push the state down
  - we can move the state & the button to a separate component
  - this is the first solution -> but not a good one


****************************

  1. create Counter.jsx\
  2. import in 01-lower-state/index.jsx
  3. Profiler -> test




*/

import Starter from './01-lower-state/index'

const App = () => {
  return (
    <main className='container'>
      <Starter />
    </main>
  )
}
export default App
