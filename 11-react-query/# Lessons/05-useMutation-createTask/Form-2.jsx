/*
  Create Task - Initial Setup

*/

import { useMutation } from '@tanstack/react-query'
import { useState } from 'react'
import customFetch from './utils'

const Form = () => {
  const [newItemName, setNewItemName] = useState('')

  // 1. extract directly
  const { mutate: createTask, isLoading } = useMutation({
    // 2a. pass param to function
    mutationFn: (taskTitle) => {
      customFetch.post('/', {
        title: taskTitle, // 2b.
      })
    },
  })

  const handleSubmit = (e) => {
    e.preventDefault()

    createTask(newItemName) // 3. we don't check for empty value -> since server handled that for us -> check in Network tab -> filter (Fetch/XHR) -> status = 400
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
        <button type='submit' className='btn' disabled={isLoading}>
          add task
        </button>
      </div>
    </form>
  )
}
export default Form
