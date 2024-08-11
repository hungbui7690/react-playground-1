import Starter from './05-cleanup-function'
import './index.css'

// 1. Vanilla JS
const someFunc = () => {}
window.addEventListener('scroll', someFunc)
window.removeEventListener('scroll', someFunc)

function App() {
  return (
    <div className='container'>
      <Starter />
    </div>
  )
}

export default App
