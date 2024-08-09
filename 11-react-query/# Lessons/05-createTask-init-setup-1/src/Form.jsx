import { useMutation } from '@tanstack/react-query'
import { useState } from 'react'
import customFetch from './utils'

const Form = () => {
  const [newItemName, setNewItemName] = useState('')

  const result = useMutation({
    mutationFn: () => {
      return customFetch.post('/', {
        title: 'some Title',
      })
    },
  }) // (1) function MUST HAVE "return"

  // console.log(result) // (2) return "mutate" which is a function

  const { mutate: createTask, isLoading } = result // (3) extract "mutate" + change name to "createTask"

  const handleSubmit = (e) => {
    e.preventDefault()

    createTask() // (5) exec
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

        {/* (4) */}
        <button type='submit' className='btn' disabled={isLoading}>
          add task
        </button>
      </div>
    </form>
  )
}
export default Form
