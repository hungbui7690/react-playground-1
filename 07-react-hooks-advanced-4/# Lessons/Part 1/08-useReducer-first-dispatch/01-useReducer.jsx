/*
  useReducer - First Dispatch
  - click the clear button 
    -> will dispatch/send the type=CLEAR_LIST to reducer function

  - reducer function will handle and return new state


*/

import { useReducer } from 'react'
import { data } from './data'

const defaultState = {
  people: data,
}

// 2a. 2 params: state & action
const reducer = (state, action) => {
  console.log(action) // has "type" property

  // 2b.
  if (action.type === 'CLEAR_LIST') {
    return { ...state, people: [] } // extract "state" >> then overwrite "people"
  }

  return state // 2c. must return state -> otherwise, if type not match -> error
}

const ReducerBasics = () => {
  const [state, dispatch] = useReducer(reducer, defaultState)

  const clearList = () => {
    dispatch({ type: 'CLEAR_LIST' }) // 1. send this to reducer function above
  }
  const removeItem = (id) => {
    // let newPeople = people.filter((person) => person.id !== id)
    // setPeople(newPeople)
  }
  const resetList = () => {
    // setPeople(data)
  }

  console.log(state)

  return (
    <div className='container'>
      {state.people.map((person) => {
        const { id, name } = person

        return (
          <div key={id} className='item'>
            <h4>{name}</h4>
            <button onClick={() => removeItem(id)}>remove</button>
          </div>
        )
      })}
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
