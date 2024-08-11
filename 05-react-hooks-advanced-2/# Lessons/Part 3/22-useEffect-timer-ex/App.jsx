import Starter from './05-cleanup-function'
import './index.css'

// Vanilla JS: Clean Up Functions
const intID = setInterval(() => {
  console.log('hello from interval')
}, 1000)
clearInterval(intID)

function App() {
  return (
    <div className='container'>
      <Starter />
    </div>
  )
}

export default App
