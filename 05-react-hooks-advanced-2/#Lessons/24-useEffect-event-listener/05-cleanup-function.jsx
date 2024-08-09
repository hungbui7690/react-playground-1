import { useEffect, useState } from 'react'

const RandomComponent = () => {
  useEffect(() => {
    const someFunc = () => {
      // logic
    }

    window.addEventListener('scroll', someFunc) // (2) PIC

    return () => window.removeEventListener('scroll', someFunc) // (3)
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
