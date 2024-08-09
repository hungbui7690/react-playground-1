import React from 'react'
import { iconLinks } from '../data'
import PageLinks from './PageLinks'

const Footer = () => {
  return (
    <footer className='section footer'>
      {/* (3) done */}
      <PageLinks parentClass='footer-links' itemClass='footer-link' />

      <ul className='footer-icons'>
        {iconLinks.map((link) => {
          return (
            <li key={link.id}>
              <a
                href={link.href}
                target='_blank'
                rel='noreferrer'
                className='footer-icon'
              >
                <i className={link.icon}></i>
              </a>
            </li>
          )
        })}
      </ul>

      <p className='copyright'>
        copyright &copy; Backroads travel tours company
        <span id='date'></span> all rights reserved
      </p>
    </footer>
  )
}

export default Footer
