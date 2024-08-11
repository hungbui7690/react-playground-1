/*
  UseCallback
  - The useCallback hook is a hook in React that allows you to memoize a function. It takes two arguments: the first is the function you want to memoize, and the second is an array of dependencies. The hook will return a memoized version of the function that only changes if one of the values in the dependency array changes.

  - By memoizing the function, you can avoid unnecessary re-renders and improve the performance of your React application. The function will only be re-created if one of its dependencies changes, otherwise the same instance of the function will be returned. This can be useful in situations where you have an expensive function that you only want to recompute when its dependencies change.


*****************************

  - if data change -> handleClick will be created again -> otherwise, it will use the memoise version of it

  function MyComponent() {
    const [data, setData] = useState([])
    const handleClick = useCallback(() => {
      console.log(data);
    }, [data])

    return (
      <div>
        <button onClick={handleClick}>Click me</button>
      </div>
    )
  }

  - In this example, the handleClick function is memoized using useCallback and the data prop is passed as a dependency. This means that the handleClick function will only be re-created if the data prop changes.


*****************************

  - we will apply this to removePerson
  - but if we leave the dependency array blank -> log will always return 4 people -> step 1.
  - add people to dependency list -> step 2.


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
