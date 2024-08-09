import { useState } from 'react'
import { data } from './data' // (3a)

const UserChallenge = () => {
  const [name, setName] = useState('') // (1a)
  const [users, setUsers] = useState(data) // (3b)

  // (2a)
  const handleSubmit = (e) => {
    e.preventDefault()

    // (5)
    if (!name) return
    const id = Date.now()
    const newUser = { id, name }
    const updatedUsers = [...users, newUser]

    setUsers(updatedUsers)
    setName('')
  }

  // (6)
  const removeUser = (id) => {
    const updatedUsers = users.filter((user) => user.id !== id)
    setUsers(updatedUsers)
  }

  return (
    <div>
      {/* (2b) onSubmit */}
      <form className='form' onSubmit={handleSubmit}>
        <h4>Add User</h4>
        <div className='form-row'>
          <label htmlFor='name' className='form-label'>
            Name
          </label>
          <input
            id='name'
            type='text'
            className='form-input'
            value={name} // (1b)
            onChange={(e) => setName(e.target.value)} // (1c)
          />
        </div>
        <button type='submit' className='btn btn-block'>
          Submit
        </button>
      </form>

      <section className='container'>
        <h2>users</h2>
        {/* (4) */}
        {users.map((user) => {
          return (
            <div key={user.id}>
              <h4>{user.name}</h4>
              <button className='btn' onClick={() => removeUser(user.id)}>
                remove
              </button>
            </div>
          )
        })}
      </section>
    </div>
  )
}
export default UserChallenge
