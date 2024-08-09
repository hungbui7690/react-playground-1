import { useState } from 'react'

const MultipleInputs = () => {
  const [user, setUser] = useState({
    name: '',
    email: '',
    password: '',
  }) // (1a) we use object instead of fields >> one state value represents all inputs

  // (2) *** only 1 function that can handles for multiple input
  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value }) // spread, then add/update new pair
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(user)
  }

  return (
    <div>
      <form className='form' onSubmit={handleSubmit}>
        <h4>Multiple Inputs</h4>
        {/* name */}
        <div className='form-row'>
          <label htmlFor='name' className='form-label'>
            name
          </label>
          <input
            type='text'
            className='form-input'
            id='name'
            name='name' // ***
            value={user.name} // (1b)
            onChange={handleChange}
          />
        </div>
        {/* email */}
        <div className='form-row'>
          <label htmlFor='email' className='form-label'>
            Email
          </label>
          <input
            type='email'
            className='form-input'
            id='email'
            name='email' // *** MUST HAVE NAME ATTRIBUTE
            value={user.email} // (1c)
            onChange={handleChange}
          />
        </div>
        {/* password */}
        <div className='form-row'>
          <label htmlFor='password' className='form-label'>
            Password
          </label>
          <input
            type='password'
            className='form-input'
            id='password'
            name='password' // ***
            value={user.password} // (1d)
            onChange={handleChange}
          />
        </div>

        <button type='submit' className='btn btn-block'>
          submit
        </button>
      </form>
    </div>
  )
}
export default MultipleInputs
