import { useState } from 'react'
import { useCreateTasks } from './reactQueryCustomHooks'

const Form = () => {
  const [newItemName, setNewItemName] = useState('')

  // 2.
  const { createTask, createTaskLoading } = useCreateTasks()

  const handleSubmit = (e) => {
    e.preventDefault()

    // 3. this is to fix the issues of setNewItemName -> done -> do the same for edit & delete
    createTask(newItemName, {
      onSuccess: () => {
        setNewItemName('')
      },
    })
  }
  return (
    <form onSubmit={handleSubmit}>
      <h4>task bud</h4>
      <div className='form-control'>
        <input
          type='text '
          className='form-input'
          value={newItemName}
          onChange={(event) => setNewItemName(event.target.value)}
        />
        <button type='submit' className='btn' disabled={createTaskLoading}>
          add task
        </button>
      </div>
    </form>
  )
}
export default Form
