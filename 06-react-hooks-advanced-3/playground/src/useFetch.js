import { useEffect, useState } from 'react'

const useFetchUser = (url) => {
  const [isLoading, setIsLoading] = useState(true)
  const [isError, setIsError] = useState(false)
  const [data, setData] = useState(null) // 1a. change from 'user' to 'data'

  useEffect(() => {
    const fetchData = async () => {
      try {
        const resp = await fetch(url)

        if (!resp.ok) {
          setIsError(true)
          setIsLoading(false)
          return
        }

        const data = await resp.json() // 1b.
        setData(data) // 1c.
      } catch (error) {
        setIsError(true)
      }
      setIsLoading(false)
    }
    fetchData() // 1c.
  }, [])

  return { isLoading, isError, data } // 1e.
}

export default useFetchUser
