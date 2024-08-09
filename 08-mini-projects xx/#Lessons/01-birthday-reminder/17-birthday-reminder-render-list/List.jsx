import Person from './Person' // (2a)

const List = ({ people }) => {
  // (2b) go to Person
  return (
    <section>
      {people.map((person) => {
        return <Person key={person.id} {...person} />
      })}
    </section>
  )
}

export default List
