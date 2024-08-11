/*
  Conditional Rendering - Multiple Returns - Fetch Data
  - practice on setting up state values and data fetching
  - create state variable
    -> user - default value null
  - fetch data from the url (for now just log result)
  - if you see user object in the console, continue with the videos


*/

import { useEffect, useState } from 'react'

const url = 'https://api.github.com/users/QuincyLarson' // 1.

const MultipleReturnsFetchData = () => {
  const [user, setUser] = useState(null) // 2.

  // 3. setup function outside
  const fetchUser = async () => {
    try {
      const resp = await fetch(url)
      const user = await resp.json()
      console.log(user)
    } catch (error) {
      console.log(error) // fetch only cares about network errors -> catch error will work with axios
    }
  }

  useEffect(() => {
    fetchUser() // 4. call function
  }, [])

  return <h2>Fetch Example</h2>
}
export default MultipleReturnsFetchData
