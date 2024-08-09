/*
  Controlled Inputs
  - setup state values >> pic
  - add value and onChange to each input
  - setup onSubmit

  - input: 
    > value: stick with states
    > onChange

  - when we submit the form, we just grab the state values and do whatever we want
    + e.target.name 
    + e.target.value
      >> those are the most important things for inputs

  *** without onChange, we cannot type 

  *** for form, we should use onSubmit

*/

import Starter from './01-controlled-inputs'

const App = () => {
  return (
    <main>
      <Starter />
    </main>
  )
}
export default App
