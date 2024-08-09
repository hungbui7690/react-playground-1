/*
  Switch to Object
  - be careful, don't overwrite
      setPerson('shakeAndBake') >> overwrite
      setPerson({ name: 'susan' }) >> overwrite
      setPerson({ ...person, name: 'susan' }) >> update

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
