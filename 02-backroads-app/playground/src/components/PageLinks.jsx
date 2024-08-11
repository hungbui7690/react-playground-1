import React from 'react'
import { pageLinks } from '../data'

// 1a.
const PageLinks = ({ parentClass, itemClass }) => {
  return (
    // 1b
    <ul className={parentClass} id='nav-links'>
      {pageLinks.map((link) => {
        return (
          <li key={link.id}>
            {/* 1c. Navbar.js */}
            <a href={link.href} className={itemClass}>
              {link.text}
            </a>
          </li>
        )
      })}
    </ul>
  )
}

export default PageLinks
