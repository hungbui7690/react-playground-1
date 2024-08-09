import { useQuery } from '@tanstack/react-query'
import customFetch from './utils'

// (2a) always start with "use"
export const useFetchTasks = () => {
  const { isLoading, isError, error, data } = useQuery({
    queryKey: ['tasks'],
    queryFn: async () => {
      const { data } = await customFetch.get('/')
      return data
    },
  })

  // (2b) navigate to Items.jsx
  return { isLoading, error, data, isError }
}

export const useCreateTasks = () => {}
export const useEditTasks = () => {}
export const useDeleteTasks = () => {}
