/*
  UseEffect - Event Listeners
  - pic


*****************************

  You Might Not Need an Effect
  - react hooks came from react 16
  - use a lot of useEffect leads to clunky code 
    + hard to manage
    + also leads to performance issues
  - skim through the article above -> then next time, if we want to use useEffect() -> just head there and find alternatives 


*****************************

  - most of the time, useEffect is used to fetching data
    -> but now, there are many libraries: react query, rtk query, SWR (from vercel) or next.js (vercel as well)
      # take care of things like caching & synchronization
  - https://beta.reactjs.org/learn/you-might-not-need-an-effect
  - https://swr.vercel.app/


*/

import { useEffect, useState } from 'react'

const RandomComponent = () => {
  useEffect(() => {
    const someFunc = () => {
      // logic
    }

    window.addEventListener('scroll', someFunc) // 2. pic

    return () => window.removeEventListener('scroll', someFunc) // 3. clean up function
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
