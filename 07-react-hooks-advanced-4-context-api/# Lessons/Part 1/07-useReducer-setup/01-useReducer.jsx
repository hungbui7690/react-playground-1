/*
  useReducer - Setup
  - change from useState to useReducer


**************************

  - remove useState
  - use useReducer


**************************

  - reducer function
    -> whatever state is returned from the function is the new state


  - dispatch({type:'SOME_ACTION'}) an action
    -> handle it in reducer, return new state


**************************

  - action.type


*/

import { useReducer } from 'react'
import { data } from './data'

// 2. init states -> load "data" to people -> we don't need useState below
const defaultState = {
  people: data,
}

// 3. reducer function: whatever is returned from the function is the new state
const reducer = () => {}

const ReducerBasics = () => {
  // console.log(data)
  const [state, dispatch] = useReducer(reducer, defaultState) // 4. instead of useState, we use useReducer

  // 1. comment functionalities
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
      {/* 5. */}
      {state.people.map((person) => {
        const { id, name } = person

        return (
          <div key={id} className='item'>
            <h4>{name}</h4>
            <button onClick={() => removeItem(id)}>remove</button>
          </div>
        )
      })}
      {/* 6 */}
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
