/*
  useMutation Helper Options
  - useMutation comes with some helper options that allow quick and easy side-effects at any stage during the mutation lifecycle. 
    -> These come in handy for both invalidating and refetching queries after mutations


****************************

  - onSuccess
  - onError


****************************

  - toast.error(error.response.data.msg)
    -> "error" is an object, and we cannot pass that to toast.error 
    -> "error.response.data.msg" is the string that we get from server


****************************

  - with useEffect() we need to re-fetch to get the latest data
    -> it is simple with react query -> it will re-fetch the tasks for us 


*/

import { useMutation } from '@tanstack/react-query'
import { useState } from 'react'
import customFetch from './utils'
import { toast } from 'react-toastify' // 1.

const Form = () => {
  const [newItemName, setNewItemName] = useState('')

  const { mutate: createTask, isLoading } = useMutation({
    mutationFn: (taskTitle) => {
      return customFetch.post('/adsf', {
        title: taskTitle,
      })
    },
    onSuccess: () => {},

    // 2.
    onError: (error) => {
      console.log(error)
      toast.error(error.response.data.msg) // response.data.msg: this is the response msg from server
    },
  })

  const handleSubmit = (e) => {
    e.preventDefault()

    createTask(newItemName)
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
