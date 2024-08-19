/*
  First Query
  - Query Key
    -> The unique key you provide is used internally for refetching, caching, and sharing your queries throughout your application.
    -> TanStack Query manages query caching for you based on query keys


****************************

  - Query Function
    -> A query function can be literally any function that returns a promise. The promise that is returned should either resolve the data or throw an error.


****************************

  1. Items.jsx


****************************

  🥌 useQuery() returns a lot of properties (isError, isFetched, isLoading...) and methods
    -> real data is from "data.data"

  ⚾ React Query is also the "state management library" 
    -> with this, we don't have to use context
    -> we don't have to setup the states in App.jsx and pass them down


*/

import SingleItem from './SingleItem'
import { useQuery } from '@tanstack/react-query' // 1.
import customFetch from './utils'

const Items = ({ items }) => {
  // 2.
  const result = useQuery({
    queryKey: ['tasks'], // can be any name
    queryFn: () => customFetch.get('/'), // axios custom instance
  })
  console.log(result) // this will return promise -> "data": from axios

  return (
    <div className='items'>
      {items.map((item) => {
        return <SingleItem key={item.id} item={item} />
      })}
    </div>
  )
}
export default Items
