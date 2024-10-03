/*
  Component Re-renders
  - 01-lower-state
    -> everytime we click on the button to increase the <count> -> app will be re-rendered
    -> Person component also be re-rendered -> see the log


**********************

  - for bigger app, which have 100 or more components -> problem


**********************

  When Component Re-Renders :
  - When the component's state or props change, React will re-render the component to reflect these changes.
  - When the parent element re-renders, even if the component's state or props have not changed.


**********************

  - everytime we update the <count> -> we trigger re-render
    -> <List> will be re-rendered, and also <Person>


**********************

  React Dev Tools
  - pic 
  - when we click on the RDT icon -> it's red -> dev app
  - go to: https://react-vite-projects-5-menu.netlify.app/ -> button is blue -> prod build app
  -> we don't want to ship the dev build app to production


**********************

  RDT -> Profiler 
  - pic



*/

import Starter from './01-lower-state/index'

const App = () => {
  return (
    <main className='container'>
      <Starter />
    </main>
  )
}
export default App
