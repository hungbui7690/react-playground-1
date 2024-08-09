/*
  useEffect - Clean Up Function - Setup
  - Setup Challenge :
    > create state value
    > in jsx return button which toggles state value
    > based on condition return second component (simple return)
    > inside second component create useEffect and run it only on initial render

*/

import Starter from './05-cleanup-function'
import './index.css'

function App() {
  return (
    <div className='container'>
      <Starter />
    </div>
  )
}

export default App
