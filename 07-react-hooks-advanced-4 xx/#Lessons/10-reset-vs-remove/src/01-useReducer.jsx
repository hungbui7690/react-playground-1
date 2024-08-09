import { useReducer } from 'react'
import { data } from './data'

const defaultState = {
  people: data,
}

const CLEAR_LIST = 'CLEAR_LIST'
const RESET_LIST = 'RESET_LIST'
const REMOVE_ITEM = 'REMOVE_ITEM'

const reducer = (state, action) => {
  if (action.type === CLEAR_LIST) {
    return { ...state, people: [] }
  }

  // (b)
  if (action.type === RESET_LIST) {
    return { ...state, people: data }
  }

  // (d) action.payload
  if (action.type === REMOVE_ITEM) {
    console.log(action) // {type:'REMOVE_ITEM', payload: {1}}

    let newPeople = state.people.filter(
      (person) => person.id !== action.payload.id
    )

    return { ...state, people: newPeople }
  }

  throw new Error(`No matching "${action.type}" - action type`)
}

const ReducerBasics = () => {
  const [state, dispatch] = useReducer(reducer, defaultState)

  const removeItem = (id) => {
    dispatch({ type: REMOVE_ITEM, payload: { id } }) // (c) payload: object that contains data that we pass to reducer()
  }
  const clearList = () => {
    dispatch({ type: CLEAR_LIST })
  }

  const resetList = () => {
    dispatch({ type: RESET_LIST }) // (a)
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
