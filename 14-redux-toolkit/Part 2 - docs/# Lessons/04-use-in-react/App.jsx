/*
  Use Redux State and Actions in React Components
  - Now we can use the React-Redux hooks to let React components interact with the Redux store. We can read data from the store with useSelector, and dispatch actions using useDispatch. Create a src/features/counter/Counter.js file with a <Counter> component inside, then import that component into App.js and render it inside of <App>.


******************************

  1. create features/counter/Counter.jsx
    -> <button onClick={() => dispatch(decrement())}>Decrement</button>
  2. App.jsx


  - Now, any time you click the "Increment" and "Decrement" buttons:
    + The corresponding Redux action will be dispatched to the store
    + The counter slice reducer will see the actions and update its state
    + The <Counter> component will see the new state value from the store and re-render itself with the new data


******************************

  - when click on the button -> dispatch decrement() to counterSlice.js


******************************

  Summary
  - Create a Redux store with configureStore
    -> configureStore accepts a reducer function as a named argument
    -> configureStore automatically sets up the store with good default settings
  - Provide the Redux store to the React application components
    -> Put a React-Redux <Provider> component around your <App />
    -> Pass the Redux store as <Provider store={store}>
  - Create a Redux "slice" reducer with createSlice
    -> Call createSlice with a string name, an initial state, and named reducer functions
    -> Reducer functions may "mutate" the state using Immer
    -> Export the generated slice reducer and action creators
  - Use the React-Redux useSelector/useDispatch hooks in React components
    -> Read data from the store with the useSelector hook
    -> Get the dispatch function with the useDispatch hook, and dispatch actions as needed


*/

import { Counter } from './features/counter/Counter'

function App() {
  return <Counter />
}

export default App
