import SingleItem from './SingleItem'

// (3)
const Items = ({ items, removeItem }) => {
  return (
    <div className='items'>
      {items.map((item) => {
        return <SingleItem key={item.id} item={item} removeItem={removeItem} />
      })}
    </div>
  )
}
export default Items
