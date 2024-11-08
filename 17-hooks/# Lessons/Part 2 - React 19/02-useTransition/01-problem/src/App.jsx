/*
  useTransition
  - React 19 is introducing support for using async functions in transitions, allowing for automatic handling of pending states, errors, forms, and optimistic updates.


------------------------

  ~~ npm install --save-exact react@rc react-dom@rc


------------------------

  - below is React 18 code that handles the pending state


*/

import { useState } from 'react'

// @
async function updateProfile(name) {
  await new Promise((resolve) => setTimeout(resolve, 1000))
  return name
}

function App() {
  const [name, setName] = useState('')
  const [loading, setLoading] = useState(false) // @ react 18
  const [error, setError] = useState(null)

  const handleSubmit = async () => {
    setLoading(true)
    const error = await updateProfile(name)
    setLoading(false)

    if (error) {
      setError(error)
      return
    }
  }

  return (
    <div>
      <input value={name} onChange={(event) => setName(event.target.value)} />
      <button onClick={handleSubmit} disabled={loading}>
        Update
      </button>
      {error && <p>{error}</p>}
    </div>
  )
}

export default App
