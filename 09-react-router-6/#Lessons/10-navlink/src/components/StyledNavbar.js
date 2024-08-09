import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className='navbar'>
      {/* styles: check isActive >> if true, then 'red', else 'grey' */}
      <NavLink
        to='/'
        style={({ isActive }) => {
          return { color: isActive ? 'red' : 'grey' }
        }}
      >
        Home
      </NavLink>

      {/* class: if isActive, then add class 'link active', else 'link' */}
      <NavLink
        to='/about'
        className={({ isActive }) => (isActive ? 'link active' : 'link')}
      >
        About
      </NavLink>
      <NavLink to='/products'>Products</NavLink>
    </nav>
  )
}

export default Navbar // (1) go to SharedLayout.js
