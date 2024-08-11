import Person from './Person'

const List = ({ people }) => {
  console.log('List is re-rendered')

  return (
    <div>
      {people.map((person) => {
        return <Person key={person.id} {...person} />
      })}
    </div>
  )
}
export default List
