import Item from './Person'
import { memo } from 'react' // 1.

const List = ({ people }) => {
  return (
    <div>
      {people.map((person) => {
        return <Item key={person.id} {...person} />
      })}
    </div>
  )
}
export default memo(List) // 2.
