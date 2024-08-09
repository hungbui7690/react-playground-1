import { useState } from 'react'

const Alert = () => {
  return <div className='alert alert-danger'>hello world</div>
}

const ToggleChallenge = () => {
  const [showAlert, setShowAlert] = useState(false)

  const toggleAlert = () => {
    if (showAlert) {
      setShowAlert(false)
      return
    }
    setShowAlert(true)
  }

  return (
    <div>
      <button className='btn' onClick={toggleAlert}>
        toggle alert
      </button>
      {showAlert && <Alert />}
    </div>
  )
}

export default ToggleChallenge
