/*
  useTransition
  - In React 19, you can use useTransition to manage the pending state for you


*/

import { useState, useTransition } from 'react'

// @
async function updateProfile(name) {
  await new Promise((resolve) => setTimeout(resolve, 1000))
  return name
}

function App() {
  const [name, setName] = useState('')
  const [error, setError] = useState(null)
  const [loading, startTransition] = useTransition() // @ react 19

  const handleSubmit = () => {
    startTransition(async () => {
      const error = await updateProfile(name)
      if (error) {
        setError(error)
        return
      }
    })
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
