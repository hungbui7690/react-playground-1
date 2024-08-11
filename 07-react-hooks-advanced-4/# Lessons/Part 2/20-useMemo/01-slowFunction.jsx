/*
  useMemo
  - The useMemo hook is a hook in React that allows you to memoize a value. It takes two arguments: the first is a function that returns the value you want to memoize, and the second is an array of dependencies. The hook will return the memoized value that will only change if one of the values in the dependency array changes.

  - By memoizing a value, you can avoid unnecessary calculations and improve the performance of your React application. The value will only be recalculated if one of its dependencies changes, otherwise the same instance of the value will be returned. This can be useful in situations where you have an expensive calculation that you only want to recompute when its dependencies change.


********************************

  - the different between useCallback and useMemo is: 
    -> useMemo just memoizes the value that return from a function
  - later, we will use useMemo to de-bounce some functionality


********************************

  In this example, the processedData value is memoized using useMemo and the data prop is passed as a dependency. This means that the processedData value will only be recalculated if the data prop changes.

  - create slowFunction file
  - setup a function
  - import in 04-fetch-data.js and set it equal to a value


***************************

  - now, everytime we click on the <Count> button -> calculation will be run, and it will take a while 


*/

// 1.
const slowFunction = () => {
  let value = 0
  for (let i = 0; i <= 1000000000; i++) {
    value += i
  }
  return value
}

export default slowFunction
