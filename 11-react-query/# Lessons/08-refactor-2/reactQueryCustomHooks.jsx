/*
  Refactor


*******************************

  1. reactQueryCustomHooks.js

*******************************

  - for the useCreateTasks(), we cannot access to setNewItemName
    -> one way to fix is useCreateTasks(setNewItemName)


*******************************

  Alternative Server Setup
  - server -> npm start
  - client adds item -> ok 
  - stop server -> then restart 
    -> everything will go back to default (taskList in server.js)


*******************************

  - to fix this, we start server by using: 
    -> npm run local-server


*/

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

// 1. go to Form
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
      // setNewItemName('') // *** we don't set here -> Form
    },
    onError: (error) => {
      toast.error(error.response.data.msg)
    },
  })

  return { createTask, createTaskLoading } // ***
}

// \\\\\\\\\\\\\\\\\\\\\\\\\\\\
// DO THE SAME FOR EDIT & DELETE
// \\\\\\\\\\\\\\\\\\\\\\\\\\\\
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
