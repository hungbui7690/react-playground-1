import React from 'react'

const PageLink = ({ id, href, text, itemClass }) => {
  return (
    <li key={id}>
      <a href={href} className='nav-icon'>
        {text}
      </a>
    </li>
  )
}

export default PageLink
