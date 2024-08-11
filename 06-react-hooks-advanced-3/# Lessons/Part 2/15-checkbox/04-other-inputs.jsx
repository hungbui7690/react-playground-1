/*
  Checkbox Input
  - e.target.checked
  - setShipping(e.target.checked)


*/

import { useState } from 'react'

const frameworks = ['react', 'angular', 'vue', 'svelte']

const OtherInputs = () => {
  const [shipping, setShipping] = useState(false) // 1a.

  // 2a.
  const handleShipping = (e) => {
    console.log(e.target.checked)
    setShipping(e.target.checked)
  }

  return (
    <div>
      <form className='form'>
        {/* checkbox */}
        <div className='form-row' style={{ textAlign: 'left' }}>
          <input
            type='checkbox'
            checked={shipping} // -> with checkbox, we don't use "value", but use "checked" attribute
            id='shipping'
            onChange={handleShipping} // 2b.
          />
          <label htmlFor='shipping'> Free Shipping </label>
        </div>

        <button type='submit' className='btn btn-block'>
          submit
        </button>
      </form>
    </div>
  )
}
export default OtherInputs
