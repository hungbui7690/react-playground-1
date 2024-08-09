/*
  Set Function "Gotcha"
  - If you want to update the state immediately and synchronously, you can pass a function to setState that receives the previous state as an argument and returns the new state. For example:

      setState((prevState) => {
        return { ...prevState, value: newValue };
      });

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
