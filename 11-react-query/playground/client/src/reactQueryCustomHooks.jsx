import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import customFetch from './utils'
import { toast } from 'react-toastify'

export const useFetchTasks = () => {
  const { isLoading, isError, error, data } = useQuery({
    queryKey: ['tasks'],
    queryFn: async () => {
      const { data } = await customFetch.get('/')
      return data
    },
  })

  return { isLoading, error, data, isError }
}

export const useCreateTasks = () => {
  const queryClient = useQueryClient()

  const { mutate: createTask, isLoading: createTaskLoading } = useMutation({
    mutationFn: (taskTitle) => {
      return customFetch.post('/', {
        title: taskTitle,
      })
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['tasks'] })
      toast.success('Task added')
    },
    onError: (error) => {
      toast.error(error.response.data.msg)
    },
  })

  return { createTask, createTaskLoading }
}

export const useEditTask = () => {
  const queryClient = useQueryClient()

  const { mutate: editTask } = useMutation({
    mutationFn: ({ taskId, isDone }) => {
      return customFetch.patch(`/${taskId}`, { isDone })
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['tasks'] })
    },
  })

  return { editTask }
}
export const useDeleteTask = () => {
  const queryClient = useQueryClient()

  const { mutate: deleteTask, isLoading: deleteTaskLoading } = useMutation({
    mutationFn: ({ taskId }) => {
      return customFetch.delete(`/${taskId}`)
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['tasks'] })
    },
  })

  return { deleteTask, deleteTaskLoading }
}
