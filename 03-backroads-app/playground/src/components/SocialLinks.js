import React from 'react'
import { iconLinks } from '../data'
import SocialLink from './SocialLink'

const SocialLinks = ({ parentClass, itemClass }) => {
  return (
    <ul className={parentClass}>
      {iconLinks.map((link) => {
        return <SocialLink key={link.id} {...link} itemClass={itemClass} />
      })}
    </ul>
  )
}

export default SocialLinks
