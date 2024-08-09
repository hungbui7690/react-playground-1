/*
  UseEffect Fundamentals
  - useEffect is a hook in React that allows you to perform side effects in function components.
    > There is no need for urban dictionary - basically any work outside of the component. 
    > Some examples of side effects are: subscriptions, fetching data, directly updating the DOM, event listeners, timers, etc.

  - useEffect hook
    > accepts two arguments (second optional)
      > 1st arg: cb function
      > 2nd arg: dependency array
    > by default runs on each render (initial and re-render)
    > cb can't return promise (so can't make it async)
    > if dependency array empty [] runs only on initial render

  *** we don't want to return promise from useEffect() 
    >> CANNOT do this: 
        useEffect(async () => {
          await ...
        })

    >> CAN do this:
        useEffect(() => {
          const func = async () => {
            await ...
          }
          func()
        })

*/

import Starter from './02-useEffect-basics'
import './index.css'

function App() {
  return (
    <div className='container'>
      <Starter />
    </div>
  )
}

export default App
