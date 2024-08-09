/*
  UseEffect - Event Listeners
  - pic

  ///////////////////////////

  You Might Not Need an Effect
  - https://beta.reactjs.org/learn/you-might-not-need-an-effect

  - react hooks came from react 16
  - use a lot of useEffect leads to clunky code 
    >> hard to manage
    >> also leads to performance issues
  - skim through the article above >> then next time, if we want to use useEffect() >> just head there and find alternatives 

  - most of the time, useEffect is used to fetching data
    >> but now, there are many libraries: react query, rtk query, swr or next.js
        >> take care of things like caching & synchronization

*/

import Starter from './05-cleanup-function'
import './index.css'

/////////////////////////
// Vanilla JS: (1)
/////////////////////////
const someFunc = () => {
  // some logic here
}
window.addEventListener('scroll', someFunc)
window.removeEventListener('scroll', someFunc)

/////////////////////////
function App() {
  return (
    <div className='container'>
      <Starter />
    </div>
  )
}

export default App
