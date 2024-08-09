import SingleItem from './SingleItem'
import { useFetchTasks } from './reactQueryCustomHooks' // (3a) *** useFetchTasks >< NOT { isLoading, error, data, isError }

const Items = ({ items }) => {
  const { isLoading, error, data, isError } = useFetchTasks() // (3b) go back to reactQueryCustomHooks to create the same for "CRUD"

  // const { isLoading, isError, error, data } = useQuery({
  //   queryKey: ['tasks'],
  //   queryFn: async () => {
  //     const { data } = await customFetch.get('/')
  //     return data
  //   },
  // }) // *** this will be placed into reactQueryCustomHooks.jsx

  if (isLoading) {
    return <p styles={{ marginTop: '1rem' }}>Loading...</p>
  }

  if (error) {
    return <p style={{ marginTop: '1rem ' }}>{error.message}</p>
  }
  return (
    <div className='items'>
      {data.taskList.map((item) => {
        return <SingleItem key={item.id} item={item} />
      })}
    </div>
  )
}
export default Items
