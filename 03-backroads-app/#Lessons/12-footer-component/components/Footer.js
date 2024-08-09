import React from 'react'
import { pageLinks, iconLinks } from '../data' // (1)

const Footer = () => {
  return (
    <footer className='section footer'>
      <ul className='footer-links'>
        {/* (2) */}
        {pageLinks.map((link) => {
          return (
            <li key={link.id}>
              <a href={link.href} className='footer-link'>
                {link.text}
              </a>
            </li>
          )
        })}
      </ul>

      <ul className='footer-icons'>
        {/* (3) */}
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
