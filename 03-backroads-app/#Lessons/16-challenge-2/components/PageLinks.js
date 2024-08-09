import React from 'react'
import { pageLinks } from '../data'
import PageLink from './PageLink' // (2a)

const PageLinks = ({ parentClass, itemClass }) => {
  return (
    <ul className={parentClass} id='nav-links'>
      {pageLinks.map((link) => {
        return <PageLink {...link} itemClass={itemClass} key={link.id} /> // (2b) create SocialLink.js (similar to PageLink)
      })}
    </ul>
  )
}

export default PageLinks
