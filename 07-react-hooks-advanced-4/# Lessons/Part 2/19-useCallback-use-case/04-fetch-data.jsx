/*
  useCallback - Common Use Case
  - in create-react-app -> it will ask to put fetchData in the dep list of useEffect -> it's a warning, but not an error 
  - we don't want to put it in the dep list -> just because every re-render, the function will be created from scratch -> trigger re-render -> infinite loop


************************************

  - the solution to this problem is using useCallback


*/

import { useState, useEffect, useCallback } from 'react'

const url = 'https://api.github.com/users'

const FetchData = () => {
  const [users, setUsers] = useState([])

  // 1. useCallback
  const fetchData = useCallback(async () => {
    try {
      const response = await fetch(url)
      const users = await response.json()
      setUsers(users)
    } catch (error) {
      console.log(error)
    }
  }, [])

  useEffect(() => {
    fetchData()
  }, [fetchData]) // 2. add to dep list here

  return (
    <section>
      <h3>github users</h3>
      <ul className='users'>
        {users.map((user) => {
          const { id, login, avatar_url, html_url } = user
          return (
            <li key={id}>
              <img src={avatar_url} alt={login} />
              <div>
                <h5>{login}</h5>
                <a href={html_url}>profile</a>
              </div>
            </li>
          )
        })}
      </ul>
    </section>
  )
}

export default FetchData
