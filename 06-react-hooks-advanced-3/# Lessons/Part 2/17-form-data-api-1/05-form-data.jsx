/*
  FormData API
  - form must have "name" attribute

***************************

  - To get data from Form Data API
    -> Object.fromEntries(formData)
    -> [...formData.entries()]
    -> check javascript-tutorial 


***************************

  - we can submit the form with "uncontrolled inputs" >> it means that we don't need to ref to the states
    -> we can do this in 2 ways: 
      + Form Data API (this lesson)
      + useRef hook (next lessons)


***************************

  - a great solution when you have bunch of inputs
  - inputs must have name attribute

    -> The FormData interface provides a way to construct a set of key/value pairs representing form fields and their values, which can be sent using the fetch() or XMLHttpRequest.send() method. 
    -> It uses the same format a form would use if the encoding type were set to "multipart/form-data".


***************************

  - e.currentTarget: 
    -> In React, e.currentTarget returns the DOM element that triggered the event.
    -> if we use onSubmit -> e.currentTarget always point to the form


*/

const UncontrolledInputs = () => {
  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('e.currentTarget: ', e.currentTarget) // always point to the form when using onSubmit

    const formData = new FormData(e.currentTarget) // 1. create form data api

    const name = formData.get('name') // 2a.
    console.log('name: ', name)

    const email = formData.get('email')
    console.log('email: ', email) // 2b.

    console.log('entries: ', [...formData.entries()]) // 3. MUST use spread operator -> otherwise, won't get data

    console.log(Object.fromEntries(formData))
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
          <input
            type='text'
            className='form-input'
            id='name'
            name='name' // *** must have name attribute in order to work with Form Data API
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
            name='email' // must have name attribute
          />
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
