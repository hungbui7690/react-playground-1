import SingleItem from './SingleItem'
import { useQuery } from '@tanstack/react-query'
import customFetch from './utils'

const Items = ({ items }) => {
  // (1) extract > isError vs error
  const { isLoading, isError, error, data } = useQuery({
    queryKey: ['tasks'],

    // Method 1
    queryFn: () => customFetch.get('/something'),

    // Method 2
    // *** if we don't like data.data.taskList below >> we can turn this into async fn
    // queryFn: async () => {
    //   const { data } = await customFetch.get('/')
    //   return data
    // },
  })

  // (2) to test > slow the network
  if (isLoading) {
    return <p styles={{ marginTop: '1rem' }}>Loading...</p>
  }

  // (4a) Method 1: mess with the URL above to test
  // if (isError) {
  //   return <p style={{ marginTop: '1rem ' }}>there was an error...</p>
  // }

  // (4b) Method 2
  if (error) {
    return <p style={{ marginTop: '1rem ' }}>{error.message}</p>
  } // *** this is from axios > we can also use error.response.data to show the message as well

  return (
    <div className='items'>
      {/* (3) data.taskList */}
      {data.data.taskList.map((item) => {
        return <SingleItem key={item.id} item={item} />
      })}
    </div>
  )
}
export default Items
