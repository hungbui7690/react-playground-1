/*
  Conditional Rendering - Multiple Returns
  - if no explicit return by default function returns 'undefined'


*****************************

  Convention: 
  - isLoading, setIsLoading
  - isError, setIsError


*/

import { useEffect, useState } from 'react'

const MultipleReturnsBasics = () => {
  const [isLoading, setIsLoading] = useState(true) // 1. use while fetching data

  useEffect(() => {
    // 2. mimic fetching data
    setIsLoading(true)
    setTimeout(() => {
      setIsLoading(false) // done fetching data
    }, 3000)
  }, [])

  if (isLoading) {
    return <h2>Loading...</h2> // 3. show this while loading data
  }

  return <h2>My App</h2> // 4. after loading, will show this
}

export default MultipleReturnsBasics
