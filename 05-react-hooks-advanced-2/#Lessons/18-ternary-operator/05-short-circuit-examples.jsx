import { useState } from 'react'

const ShortCircuitEvaluation = () => {
  const [user, setUser] = useState({ name: 'john' })
  const [isEditing, setIsEditing] = useState(false)

  return (
    <div>
      <h2>Ternary Operator</h2>

      <button className='btn'>{isEditing ? 'edit' : 'add'}</button>

      {user ? (
        <div>
          <h4>hello there user {user.name}</h4>
        </div>
      ) : (
        <div>
          <h2>please login</h2>
        </div>
      )}
    </div>
  )
}

export default ShortCircuitEvaluation
