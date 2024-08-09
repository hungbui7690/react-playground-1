import { useMutation, useQueryClient } from '@tanstack/react-query'
import customFetch from './utils'

const SingleItem = ({ item }) => {
  const queryClient = useQueryClient() // (3)

  // (1)
  const { mutate: editTask } = useMutation({
    mutationFn: ({ taskId, isDone }) => {
      return customFetch.patch(`/${taskId}`, { isDone })
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['tasks'] })
    }, // (4)
  })

  // (5)
  const { mutate: deleteTask } = useMutation({
    mutationFn: ({ taskId }) => {
      return customFetch.delete(`/${taskId}`)
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['tasks'] })
    },
  })

  return (
    <div className='single-item'>
      <input
        type='checkbox'
        checked={item.isDone}
        onChange={() => editTask({ taskId: item.id, isDone: !item.isDone })} // (2)
      />
      <p
        style={{
          textTransform: 'capitalize',
          textDecoration: item.isDone && 'line-through',
        }}
      >
        {item.title}
      </p>

      <button
        className='btn remove-btn'
        type='button'
        onClick={() => deleteTask({ taskId: item.id })} // (6)
      >
        delete
      </button>
    </div>
  )
}
export default SingleItem
