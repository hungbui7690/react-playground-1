import { Person } from './Person'
import { people } from './data' // (1a)

const List = () => {
  return (
    <div>
      {people.map((person) => {
        // (1b) to Person.jsx
        return <Person key={person.name} {...person} />
      })}
    </div>
  )
}
export default List
