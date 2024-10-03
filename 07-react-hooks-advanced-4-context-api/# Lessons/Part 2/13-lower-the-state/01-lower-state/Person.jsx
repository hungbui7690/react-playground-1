import { useEffect } from 'react'

const Person = ({ name }) => {
  console.log('Person is rendered')

  // This doesn't stop component from re-rendering
  // useEffect(() => {
  //   console.log('unfortunately does not fix the issue')
  // }, [])

  return (
    <div>
      <h4>{name}</h4>
    </div>
  )
}
export default Person
