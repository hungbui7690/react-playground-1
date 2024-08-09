import UserContainer from './UserContainer'

// (2a) extract
const NavLinks = ({ user, logout }) => {
  return (
    <div className='nav-container'>
      <ul className='nav-links'>
        <li>
          <a href='#'>home</a>
        </li>
        <li>
          <a href='#'>about</a>
        </li>
      </ul>
      {/* (2b) */}
      <UserContainer user={user} logout={logout} />
    </div>
  )
}
export default NavLinks
