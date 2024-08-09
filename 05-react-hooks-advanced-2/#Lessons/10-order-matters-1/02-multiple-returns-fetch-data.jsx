import { useEffect, useState } from 'react'

const url = 'https://api.github.com/users/QuincyLarson'

const MultipleReturnsFetchData = () => {
  const [isLoading, setIsLoading] = useState(true)
  const [isError, setIsError] = useState(false)
  const [user, setUser] = useState(null)

  // const { avatar_url, name, company, bio } = user // *** err >> since right now, user = null >> cannot pull properties out of null

  const fetchUser = async () => {
    try {
      const resp = await fetch(url)

      if (!resp.ok) {
        setIsError(true)
        setIsLoading(false)
        return
      }
      const user = await resp.json()
      console.log(user)
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

  /////////////////////////////////////
  // start from here
  /////////////////////////////////////
  const { avatar_url, name, company, bio } = user // *** if we want to use destructure >> need to do after the previous if conditions >> this is why the order matters

  return (
    <div>
      <img
        style={{ width: '150px', borderRadius: '25px' }}
        src={avatar_url}
        alt={name}
      />
      <h2>{name}</h2>
      <h4>works at {company}</h4>
      <p>{bio}</p>
    </div>
  )
}

export default MultipleReturnsFetchData
