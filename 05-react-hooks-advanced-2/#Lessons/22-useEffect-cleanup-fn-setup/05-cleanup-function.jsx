import { useEffect, useState } from 'react'

const RandomComponent = () => {
  /*
  - though we use [] dep list >> it still runs multiple time
    >> reason is everytime we toggle the button >> we mount and unmount the component 
    >> during the mount phase, we repeat initial render
*/
  useEffect(() => {
    console.log('hmm, this is interesting')
  }, [])

  return <h1>hello there</h1>
}

const CleanupFunction = () => {
  const [toggle, setToggle] = useState(false) // boolean

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
