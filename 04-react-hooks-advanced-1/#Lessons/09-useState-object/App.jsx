/*
  useState with Object
  - Setup Challenge :
    > setup three state values
      - name: string
      - age: number
      - hobby: string
    > render in the browser
    > create a button
      - setup a function
        + update all three state values
    > as a result once the user clicks the button, new person is displayed in the browser

//////////////////////////////

  Automatic Batching
  - const displayPerson = () => {
      setName('john')
      setAge(28)
      setHobby('scream at the computer')
    }
    > call 3 set functions >> does react re-renders 3 times
      + just re-render once

  - Reason: 
    > In React, "batching" refers to the process of grouping multiple state updates into a single update. 
      + This can be useful in certain cases because it allows React to optimize the rendering of your components by minimizing the number of DOM updates that it has to perform.

    > By default, React uses a technique called "auto-batching" to group state updates that occur within the same event loop into a single update. 
      + This means that if you call the state update function multiple times in a short period of time, React will only perform a single re-render for all of the updates.

    > React 18 ensures that state updates invoked from any location will be batched by default. 
      + This will batch state updates, including native event handlers, asynchronous operations, timeouts, and intervals.

*/

import Starter from './04-useState-object'
import './index.css'

function App() {
  return (
    <div className='container'>
      <Starter />
    </div>
  )
}

export default App
