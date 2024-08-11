/*
  Fetch Error Gotcha
  - By default, the fetch() API does not consider HTTP status codes in the 4xx or 5xx range to be errors. 
    -> Instead, it considers these status codes to be indicative of a successful request

  
**************************

  -> fetch API error check -> if(!response.ok){}


*/

import { useEffect, useState } from 'react'

const url = 'https://api.github.com/users/QuincyLarson123'

const MultipleReturnsFetchData = () => {
  const [isLoading, setIsLoading] = useState(true)
  const [isError, setIsError] = useState(false)
  const [user, setUser] = useState(null)

  const fetchUser = async () => {
    try {
      const response = await fetch(url)
      // console.log(response) // in resp, contains "ok" -> response.ok

      // this shows how to check error with fetch API -> if we don't have this & url is wrong -> no err will be catch -> app will break
      if (!response.ok) {
        setIsError(true)
        setIsLoading(false)
        return
      }

      const user = await resp.json()
      setUser(user)
    } catch (error) {
      setIsError(true)
      console.log(error)
    }
    setIsLoading(false)
  }

  useEffect(() => {
    fetchUser()
  }, [])

  if (isLoading) {
    return <h2>Loading...</h2>
  }
  if (isError) {
    return <h2>There was an error...</h2>
  }
  return (
    <div>
      <img
        style={{ width: '150px', borderRadius: '25px' }}
        src={user.avatar_url}
        alt={user.name}
      />
      <h2>{user.name}</h2>
      <h4>works at {user.company}</h4>
      <p>{user.bio}</p>
    </div>
  )
}

export default MultipleReturnsFetchData
