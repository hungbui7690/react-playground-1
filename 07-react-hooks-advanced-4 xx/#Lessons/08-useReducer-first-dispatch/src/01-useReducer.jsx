import { useReducer } from 'react'
import { data } from './data'

const defaultState = {
  people: data,
}

const reducer = (state, action) => {
  // console.log(action) // this has "type" property >> click on the button (where it has dispatch()) to call this

  // (1a)
  if (action.type === 'CLEAR_LIST') {
    return { ...state, people: [] } // extract "state" >> then overwrite "people"
  }

  return 'shake'
}

const ReducerBasics = () => {
  const [state, dispatch] = useReducer(reducer, defaultState)

  const removeItem = (id) => {
    // let newPeople = people.filter((person) => person.id !== id)
    // setPeople(newPeople)
  }
  const clearList = () => {
    dispatch({ type: 'CLEAR_LIST' }) // (b)
  }
  const resetList = () => {
    // setPeople(data)
  }

  console.log(state) // ***

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
