/*
  UseEffect - Fetch Data
  - later in the course we will use axios


***************************

  - import useState and useEffect
  - setup state value
    + users - default value []
  - setup useEffect
  - MAKE SURE IT RUNS ONLY ON INITIAL RENDER
  - in the cb, create a function which performs fetch functionality
    -> use url I provided in the starter file
    -> you can use .then or async
    -> set users equal to result
    -> iterate over the list and display image, user name and link


***************************

  - CANNOT DO THIS 
      useEffect(async () => {
        await ...
      })

  - DO THIS:
      useEffect(() => {
        const func = <async> () => {
          <await> ...
        }
        func()
      })


*/

import { useState, useEffect } from 'react'

const url = 'https://api.github.com/users'

const FetchData = () => {
  const [users, setUsers] = useState([]) // 1. -> []

  useEffect(() => {
    // 2a. we can also setup function outside
    const fetchData = async () => {
      try {
        const response = await fetch(url)
        const users = await response.json()
        setUsers(users) // 2b. setter
      } catch (error) {
        console.log(error)
      }
    }

    fetchData() // 2c.
  }, []) // 2d.

  // 3.
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
