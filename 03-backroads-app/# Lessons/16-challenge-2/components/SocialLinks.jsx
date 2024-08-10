import React from 'react'
import { iconLinks } from '../data'
import SocialLink from './SocialLink' // 4a.

// 4b. add parentClass + itemClass
const SocialLinks = ({ parentClass, itemClass }) => {
  return (
    <ul className={parentClass}>
      {iconLinks.map((link) => {
        return <SocialLink key={link.id} {...link} itemClass={itemClass} /> // 4c.
      })}
    </ul>
  )
}

export default SocialLinks
