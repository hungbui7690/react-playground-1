/*
  React Hooks Rules (Don't call hooks conditionally)


*/

import { useState, useEffect } from 'react'

const Example = () => {
  const [condition, setCondition] = useState(true)

  // 1. won't work
  if (condition) {
    const [state, setState] = useState(false)
  }

  // 2. won't work
  if (condition) {
    return <h2>Hello There</h2>
  }

  // 3. don't place use effect after return -> this will also fail
  useEffect(() => {
    console.log('hello there')
  }, [])

  return <h2>example</h2>
}

export default Example
