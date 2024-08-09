import { useState } from 'react'

const UncontrolledInputs = () => {
  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(e.currentTarget)

    const formData = new FormData(e.currentTarget) // (1)

    const newUser = Object.fromEntries(formData) // (2) return object
    console.log(newUser) // {name: 'ab', email: 'hungbui7690@gmail.com', password: '123'}

    e.currentTarget.reset() // (3) reset to original values >> end
  }

  return (
    <div>
      <form className='form' onSubmit={handleSubmit}>
        <h4>Form Data API</h4>
        {/* name */}
        <div className='form-row'>
          <label htmlFor='name' className='form-label'>
            name
          </label>
          <input type='text' className='form-input' id='name' name='name' />
        </div>
        {/* email */}
        <div className='form-row'>
          <label htmlFor='email' className='form-label'>
            Email
          </label>
          <input type='email' className='form-input' id='email' name='email' />
        </div>
        {/* email */}
        <div className='form-row'>
          <label htmlFor='password' className='form-label'>
            Password
          </label>
          <input
            type='password'
            className='form-input'
            id='password'
            name='password'
            autoComplete='on'
          />
        </div>

        <button type='submit' className='btn btn-block'>
          submit
        </button>
      </form>
    </div>
  )
}
export default UncontrolledInputs
