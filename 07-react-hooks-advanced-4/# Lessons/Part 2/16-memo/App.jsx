/*
  React.memo()
  - React.memo is a higher-order component (HOC) in React that allows you to memoize a component. This means that if the input props to the component have not changed, the memoized component will return the same result from the previous render, instead of re-rendering. This can help improve performance by avoiding unnecessary render cycles.

  - The React.memo function takes a functional component as its argument and returns a new component that has the same behavior, but with the added optimization of checking if the props have changed. If the props have not changed, the memoized component will return the cached result from the previous render.


****************************

  - In some case, when we can't lower the state -> use React.memo()


****************************

  - for example, index.jsx -> we have the <count> state -> and we need that state to be in index.jsx -> we can't move it to the separate component 
    -> we can use React.memo in the List component 

  🎏 React.memo(Component) - returns memoized component


****************************

  1. List.jsx
    -> because List component does not change -> does not trigger re-render on List component


*/

import Starter from './03-hooks'

const App = () => {
  return (
    <main className='container'>
      <Starter />
    </main>
  )
}
export default App
