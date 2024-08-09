/*
  Conditional Rendering - Multiple Returns - Fetch Data
  - Data Fetching :
    > usually three options:
      + loading - waiting for data to arrive (display loading state)
      + error - there was an error (display error message)
      + success - received data (display data)

*/

import Starter from './02-multiple-returns-fetch-data'
import './index.css'

function App() {
  return (
    <div className='container'>
      <Starter />
    </div>
  )
}

export default App
