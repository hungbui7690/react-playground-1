import { useState } from 'react'

const Alert = () => {
  return <div className='alert alert-danger'>hello world</div>
}

const ToggleChallenge = () => {
  const [showAlert, setShowAlert] = useState(false)

  return (
    <div>
      {/* *** we write directly here */}
      <button className='btn' onClick={() => setShowAlert(!showAlert)}>
        toggle alert
      </button>
      {showAlert && <Alert />}
    </div>
  )
}

export default ToggleChallenge
