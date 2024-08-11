/*
  Custom Hooks Generic Fetch
  (1) create useFetch.js
      > we will convert useFetchUser.js to useFetch.js (generic)


*/

import useFetch from './useFetch'

const url = 'https://api.github.com/users/QuincyLarson'

const FetchData = () => {
  const { isLoading, isError, data: user } = useFetch(url) // 2. data:user

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
