import { pageLinks } from '../data'

const PageLinks = () => {
  // 1. copy from Navbar
  return (
    <ul className='nav-links' id='nav-links'>
      {pageLinks.map((link) => {
        return (
          <li key={link.id}>
            <a href={link.href} className='nav-link'>
              {link.text}
            </a>
          </li>
        )
      })}
    </ul>
  )
}

export default PageLinks
