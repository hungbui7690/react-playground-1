import React from 'react'
import { iconLinks } from '../data' // (5b) go to Navbar.js

// (5a) similar to PageLinks.js
const SocialLinks = ({ itemClass }) => {
  return (
    <ul className={itemClass}>
      {iconLinks.map((link) => {
        return (
          <li key={link.id}>
            <a
              href={link.href}
              target='_blank'
              rel='noreferrer'
              className='nav-icon'
            >
              <i className={link.icon}></i>
            </a>
          </li>
        )
      })}
    </ul>
  )
}

export default SocialLinks
