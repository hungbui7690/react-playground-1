/*
  Function "Gotcha"
  - setup remove person function in index.jsx 
    -> because the list of person state is in index.jsx

  - pass it down to List and Person


**********************************

  - we can see that after this setup, when we click on the count button -> trigger re-render
    -> in advanced-2 -> 01-code-example -> sayHello -> we know that this function will be created from scratch 
    -> this this case, removePerson will be created from scratch -> every render, this function will be created from the component tree -> and JS thinks that the props (removePerson) that we pass to <List> component has changed 
  
  - we'll fix that in next lesson using useCallback hook


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
