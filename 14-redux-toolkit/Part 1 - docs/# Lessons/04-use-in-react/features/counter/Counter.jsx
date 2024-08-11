import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment } from './counterSlice'

export function Counter() {
  const count = useSelector((state) => state.counter.value) // get value from store
  const dispatch = useDispatch()

  return (
    <div>
      <div>
        <button onClick={() => dispatch(decrement())}>Decrement</button>
        <span> {count} </span>
        <button onClick={() => dispatch(increment())}>Increment</button>
      </div>
    </div>
  )
}
