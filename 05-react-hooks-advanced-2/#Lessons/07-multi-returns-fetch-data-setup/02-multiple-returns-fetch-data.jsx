import { useEffect, useState } from 'react'

const url = 'https://api.github.com/users/QuincyLarson' // (1)

const MultipleReturnsFetchData = () => {
  const [user, setUser] = useState(null) // (2) null

  // (3)
  const fetchUser = async () => {
    try {
      const resp = await fetch(url)
      const user = await resp.json()
      console.log(user)
    } catch (error) {
      console.log(error) // fetch only cares about network errors >> will work with axios
    }
  }

  useEffect(() => {
    fetchUser() // (4)
  }, [])

  return <h2>Fetch Example</h2>
}
export default MultipleReturnsFetchData
