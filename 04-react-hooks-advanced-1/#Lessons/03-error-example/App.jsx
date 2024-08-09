/*
  Overview
  - /tutorial directory
  - work in the starter folder
  - complete code in the final folder
  - in order to work on topic import component from 'starter'
  - in order to test final import component from 'final'
  - setup challenges
  - in the beginning examples with numbers and buttons :):):)

////////////////////////////////

  Error Example
  - in this lesson, we learn why we need useState hook

  - Setup
    > create count variable
    > display value in the JSX
    > add button and increase the value
    > the reason for bug - we don't trigger re-render (reference next lecture)

*/

import Starter from './01-error-example'
import './index.css'

function App() {
  return (
    <div className='container'>
      <Starter />
    </div>
  )
}

export default App
