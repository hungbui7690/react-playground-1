import { useEffect, useState } from 'react'

const MultipleReturnsBasics = () => {
  const [isLoading, setIsLoading] = useState(true) // (1) while fetching data >> convention with boolean values "isSomething"

  useEffect(() => {
    // mimic fetching data
    setTimeout(() => {
      setIsLoading(false) // done fetching data
    }, 3000)
  }, []) // (2)

  if (isLoading) {
    return <h2>Loading...</h2> // (3a) show this while loading data
  }

  return <h2>My App</h2> // (3b) after loading, will show this
}

export default MultipleReturnsBasics
