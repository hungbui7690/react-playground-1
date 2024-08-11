/*
  UseEffect - Timer Example
  - we want to use cleanup function if we don't want things to run in the background


*/

import { useEffect, useState } from 'react'

const RandomComponent = () => {
  useEffect(() => {
    console.log('hmmmm, interesting!!!')
    // 1. does not stop, keeps going -> every time we render component new interval gets created -> we need to stop using step 2.
    const intID = setInterval(() => {
      console.log('From Cleanup Function')
    }, 1000)

    // 2. above is like to subscribe to a service -> and this step is like to unsubscribe
    return () => {
      clearInterval(intID)
      console.log('-> Clean Up') // this will run after re-render & before the useEffect()
    }
  }, [])
  return <h1>hello there</h1>
}

const CleanupFunction = () => {
  const [toggle, setToggle] = useState(false)

  console.log('render')

  return (
    <div>
      <button className='btn' onClick={() => setToggle(!toggle)}>
        toggle component
      </button>
      {toggle && <RandomComponent />}
    </div>
  )
}

export default CleanupFunction
