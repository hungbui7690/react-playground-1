/*
  Set Function "Gotcha"
  - Setup Challenge :
    > setup a state value and the button
    > add functionality to increase value by 1
    > log a state value, right after setFunction (1)

  - Keep in mind that the state update function setState does not immediately mutate the state. 
    > Instead, it schedules an update to the state and tells React that it needs to re-render the component. > The actual state update will be performed as part of the next rendering cycle. 
    > Be mindful when you need to set state value based on a different state value.

  - trivial example

*/

import Starter from './05-useState-gotcha'
import './index.css'

function App() {
  return (
    <div className='container'>
      <Starter />
    </div>
  )
}

export default App
