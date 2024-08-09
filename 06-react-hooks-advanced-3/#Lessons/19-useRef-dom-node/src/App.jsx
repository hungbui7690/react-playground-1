/*
  useRef - DOM Node
  - useState: 
    > preserves the states
    > TRIGGERS re-render everytime update the value
  - useRef: 
    > preserves the value between renders
    > DOES NOT TRIGGER re-render
    > used to access DOM Nodes

  *** useRef is another way to setup uncontrolled inputs 

*/

import Starter from './01-useRef-basics'

const App = () => {
  return (
    <main>
      <Starter />
    </main>
  )
}
export default App
