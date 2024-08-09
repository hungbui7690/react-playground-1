import { useState } from 'react'

const ControlledInputs = () => {
  const [name, setName] = useState('') // (1) these state values will associate with those inputs
  const [email, setEmail] = useState('')

  // const handleChange = (e) => {
  //   // for now we won't use it
  //   const name = e.target.name
  //   const value = e.target.value
  // }

  // (3a) get the states and do whatever we want
  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(name, email)
  }

  return (
    // (3b) onSubmit
    <form className='form' onSubmit={handleSubmit}>
      <h4>controlled inputs</h4>
      <div className='form-row'>
        <label htmlFor='name' className='form-label'>
          name
        </label>
        <input
          type='text'
          className='form-input'
          value={name} // (2a)
          onChange={(e) => setName(e.target.value)} // (2b)
          id='name'
        />
      </div>

      <div className='form-row'>
        <label htmlFor='email' className='form-label'>
          Email
        </label>
        <input
          type='email'
          className='form-input'
          id='email'
          value={email} // (2c) ***
          onChange={(e) => setEmail(e.target.value)} // (2d) ***
        />
      </div>

      <button type='submit' className='btn btn-block'>
        submit
      </button>
    </form>
  )
}
export default ControlledInputs
