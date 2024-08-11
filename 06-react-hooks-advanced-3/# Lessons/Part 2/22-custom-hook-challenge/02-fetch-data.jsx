import useFetchUser from './useFetchUser'

const url = 'https://api.github.com/users/QuincyLarson'

const FetchData = () => {
  const { isLoading, isError, user } = useFetchUser(url) // 2. export isLoading, isError, user

  // \\\\\\\\\\\\\\\\\\\\\\\\\
  // ORIGINAL
  // \\\\\\\\\\\\\\\\\\\\\\\\\
  // const [isLoading, setIsLoading] = useState(true)
  // const [isError, setIsError] = useState(false)
  // const [user, setUser] = useState(null)

  // useEffect(() => {
  //   const fetchUser = async () => {
  //     try {
  //       const resp = await fetch(url)
  //       if (!resp.ok) {
  //         setIsError(true)
  //         setIsLoading(false)
  //         return
  //       }

  //       const user = await resp.json()
  //       setUser(user)
  //     } catch (error) {
  //       setIsError(true)
  //     }
  //     setIsLoading(false)
  //   }
  //   fetchUser()
  // }, [])

  if (isLoading) {
    return <h2>Loading...</h2>
  }
  if (isError) {
    return <h2>There was an error...</h2>
  }

  const { avatar_url, name, company, bio } = user

  return (
    <div className='container' style={{ marginTop: '110px' }}>
      <img
        style={{ width: '100px', borderRadius: '25px' }}
        src={avatar_url}
        alt={name}
      />
      <h2>{name}</h2>
      <h4>works at {company}</h4>
      <p>{bio}</p>
    </div>
  )
}

export default FetchData
