/*
  Create Task - Initial Setup
  - useQuery    -> fetch
  - useMutation -> create, update, delete


***************************

  1. Form.jsx


***************************

  🎈 after submit the form -> need to refresh to show the value


*/

import { useMutation } from '@tanstack/react-query'
import { useState } from 'react'
import customFetch from './utils'

const Form = () => {
  const [newItemName, setNewItemName] = useState('')

  // 1. function MUST HAVE "return"
  const result = useMutation({
    mutationFn: () => {
      return customFetch.post('/', {
        title: 'some Title',
      })
    },
  })

  // 2. return "mutate" which is a function
  // console.log(result)

  // 3. extract "mutate" + change name to "createTask"
  const { mutate: createTask, isLoading } = result

  const handleSubmit = (e) => {
    e.preventDefault()

    createTask() // 5. exec
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

        {/* 4. */}
        <button type='submit' className='btn' disabled={isLoading}>
          add task
        </button>
      </div>
    </form>
  )
}
export default Form
