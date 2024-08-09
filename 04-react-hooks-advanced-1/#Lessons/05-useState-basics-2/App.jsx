/*
  UseState Fundamentals
  - useState hook = useState function
    > returns an array with two elements: 
      + the current state value
      + and a function that we can use to update the state
  - accepts default value as an argument
  - state update triggers re-render

  *** useState(default_value)

  *** to update state variable 
      >> need to use: setCount()
      >> cannot use: count = count + 1

  *** setCount(count + 1) 
      >> everytime this runs, it will trigger re-renders + preserves the value between re-render
      >> if we have multiple buttons >> it will preserve the value for us 

*/

import Starter from './02-useState-basics'
import './index.css'

function App() {
  return (
    <div className='container'>
      <Starter />
    </div>
  )
}

export default App
