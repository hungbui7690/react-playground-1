/*
  Custom Hooks Fetch Person
  - Challenge:
    -> in App.jsx import 02-fetch-data
    -> take a look at the component
    -> and try to setup custom fetch hook
    -> hint :
      # hook should return isLoading,isError,user
      # and take url as parameter


*/

import { useEffect, useState } from 'react'

// 1.
const useFetchUser = (url) => {
  const [isLoading, setIsLoading] = useState(true)
  const [isError, setIsError] = useState(false)
  const [user, setUser] = useState(null)

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const resp = await fetch(url)
        // console.log(resp);
        if (!resp.ok) {
          setIsError(true)
          setIsLoading(false)
          return
        }

        const user = await resp.json()
        setUser(user)
      } catch (error) {
        setIsError(true)
        // console.log(error);
      }
      // hide loading
      setIsLoading(false)
    }
    fetchUser()
  }, [])

  return { isLoading, isError, user }
}

export default useFetchUser
