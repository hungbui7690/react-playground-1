import { useState } from 'react'
import { data } from '../data'
import List from './List'
import { useCallback } from 'react'

const LowerState = () => {
  const [people, setPeople] = useState(data)
  const [count, setCount] = useState(0)

  // 1. apply here -> still has issue
  // const removePerson = useCallback((id) => {
  //   console.log(people) // always return 4 items

  //   const newPeople = people.filter((person) => person.id !== id)
  //   setPeople(newPeople)
  // }, [])

  // 2. add people to dep list -> issue is fixed
  const removePerson = useCallback(
    (id) => {
      console.log(people) // always return 4 items

      const newPeople = people.filter((person) => person.id !== id)
      setPeople(newPeople)
    },
    [people]
  )

  return (
    <section>
      <button
        className='btn'
        onClick={() => setCount(count + 1)}
        style={{ marginBottom: '1rem' }}
      >
        count {count}
      </button>
      <List people={people} removePerson={removePerson} />
    </section>
  )
}

export default LowerState
