import SingleItem from './SingleItem'
import { useQuery } from '@tanstack/react-query' // (1a)
import customFetch from './utils'

const Items = ({ items }) => {
  // (1b)
  const result = useQuery({
    queryKey: ['tasks'], // can be any name
    queryFn: () => customFetch.get('/'), // axios custom instance
  })
  console.log(result) // this will return promise >> "data": from axios

  return (
    <div className='items'>
      {items.map((item) => {
        return <SingleItem key={item.id} item={item} />
      })}
    </div>
  )
}
export default Items
