import { useReducer } from 'react'
import { data } from './data'

const defaultState = {
  people: data,
}

const CLEAR_LIST = 'CLEAR_LIST' // (a)
const RESET_LIST = 'RESET_LIST'
const REMOVE_ITEM = 'REMOVE_ITEM'

const reducer = (state, action) => {
  // (b) use variable instead of string (to avoid mistake)
  if (action.type === CLEAR_LIST) {
    return { ...state, people: [] }
  }

  // (a) must have return state >> otherwise, error
  throw new Error(`No matching "${action.type}" - action type`)
}

const ReducerBasics = () => {
  const [state, dispatch] = useReducer(reducer, defaultState)

  const removeItem = (id) => {
    // let newPeople = people.filter((person) => person.id !== id)
    // setPeople(newPeople)
  }
  const clearList = () => {
    dispatch({ type: CLEAR_LIST }) // (c)
  }
  const resetList = () => {
    // setPeople(data)
  }

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
