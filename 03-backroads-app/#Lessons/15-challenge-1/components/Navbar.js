import React from 'react'
import logo from '../images/logo.svg'
import PageLinks from './PageLinks'
import SocialLinks from './SocialLinks' // (6a)

const Navbar = () => {
  return (
    <nav className='navbar'>
      <div className='nav-center'>
        <div className='nav-header'>
          <img src={logo} className='nav-logo' alt='backroads' />
          <button type='button' className='nav-toggle' id='nav-toggle'>
            <i className='fas fa-bars'></i>
          </button>
        </div>

        <PageLinks parentClass='nav-links' itemClass={'nav-link'} />

        {/* (6b) to Footer.js */}
        <SocialLinks itemClass='nav-icons' />
      </div>
    </nav>
  )
}

export default Navbar
