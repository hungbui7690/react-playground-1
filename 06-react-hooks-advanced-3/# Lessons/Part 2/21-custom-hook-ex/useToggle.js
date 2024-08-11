import { useState } from 'react'

// 1. from the original function, we setup custom hook
const useToggle = (defaultValue) => {
  const [show, setShow] = useState(defaultValue)
  const toggle = () => {
    setShow(!show)
  }

  return { show, toggle } // can return as object or array, or anything...
}

export default useToggle
