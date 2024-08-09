import React from 'react'
import PageLinks from './PageLinks'
import SocialLinks from './SocialLinks' // (7a)

const Footer = () => {
  return (
    <footer className='section footer'>
      <PageLinks parentClass='footer-links' itemClass='footer-link' />

      {/* (7b) */}
      <SocialLinks itemClass='footer-icons' />

      <p className='copyright'>
        copyright &copy; Backroads travel tours company
        <span id='date'></span> all rights reserved
      </p>
    </footer>
  )
}

export default Footer
