import { useReducer } from 'react'
import { data } from './data'

const defaultState = {
  people: data,
} // (b) init states >> load "data" to people >> we don't need useState below

// (c) reducer function: whatever is returned from the function is the new state
const reducer = () => {}

// dispatch({type:'SOME_ACTION'}) an action // (g) handle it in reducer, return new state

const ReducerBasics = () => {
  console.log(data)
  const [state, dispatch] = useReducer(reducer, defaultState) // (d) load state here

  // (a) comment functionalities
  const removeItem = (id) => {
    // let newPeople = people.filter((person) => person.id !== id)
    // setPeople(newPeople)
  }
  const clearList = () => {
    // setPeople([])
  }
  const resetList = () => {
    // setPeople(data)
  }

  return (
    <div className='container'>
      {/* (e) */}
      {state.people.map((person) => {
        const { id, name } = person

        return (
          <div key={id} className='item'>
            <h4>{name}</h4>
            <button onClick={() => removeItem(id)}>remove</button>
          </div>
        )
      })}
      {/* (f) */}
      {state.people.length === 0 ? (
        <button
          className='btn'
          style={{ marginTop: '2rem' }}
          onClick={resetList}
        >
          Reset
        </button>
      ) : (
        <button
          className='btn'
          style={{ marginTop: '2rem' }}
          onClick={clearList}
        >
          Clear
        </button>
      )}
    </div>
  )
}

export default ReducerBasics
