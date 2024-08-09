import { useState } from 'react'
import NavLinks from './NavLinks'

const Navbar = () => {
  const [user, setUser] = useState({ name: 'bob' }) // (1a)

  // (1b)
  const logout = () => {
    setUser(null)
  }

  return (
    <nav className='navbar'>
      <h5>CONTEXT API</h5>

      {/* (1c) */}
      <NavLinks user={user} logout={logout} />
    </nav>
  )
}
export default Navbar
