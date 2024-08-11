/*
  Select Input


*/

import { useState } from 'react'

const frameworks = ['react', 'angular', 'vue', 'svelte'] // 2a. data for select element

const OtherInputs = () => {
  const [framework, setFramework] = useState('react') // 1a.

  // 3a.
  const handleFramework = (e) => {
    setFramework(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(framework)
  }

  return (
    <div>
      <form className='form' onSubmit={handleSubmit}>
        {/* select */}
        <div className='form-row' style={{ textAlign: 'left' }}>
          <select
            value={framework} // 1b.
            onChange={handleFramework} // 3b.
          >
            {/* 2b. data of select will be loaded here */}
            {frameworks.map((framework) => {
              return <option key={framework}>{framework}</option>
            })}
          </select>
        </div>

        <button type='submit' className='btn btn-block'>
          submit
        </button>
      </form>
    </div>
  )
}
export default OtherInputs
