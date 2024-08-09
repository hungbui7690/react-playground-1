/*
  UseState Fundamentals
  - useState hook = useState function
    > returns an array with two elements: 
      + the current state value
      + and a function that we can use to update the state
  - accepts default value as an argument
  - state update triggers re-render

  useState(default_value)

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
