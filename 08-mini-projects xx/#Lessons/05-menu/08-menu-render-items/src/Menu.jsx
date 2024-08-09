import MenuItem from './MenuItem'

// (3a)
const Menu = ({ menuItems }) => {
  return (
    <div className='section-center'>
      {menuItems.map((item) => {
        // (3b)
        return <MenuItem key={item.id} {...item} />
      })}
    </div>
  )
}

export default Menu
