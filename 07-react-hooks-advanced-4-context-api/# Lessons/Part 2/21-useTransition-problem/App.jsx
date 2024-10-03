/*
  useTransition
  - useTransition is a React Hook that lets you update the state without blocking the UI.


*****************************

  - for example, when we type, our app is less responsive
  - check index.js -> we have the newItems array which will loop 500 times -> trigger every re-render


*****************************

  RTD -> Performance 
  - CPU: change from "No throttling" to "6x slowdown" or "4x slowdown"
  -> after this setup, everything will be very slow -> UI will be blocked as we type 


*/

import Starter from './04-react-18'

const App = () => {
  return (
    <main className='container'>
      <Starter />
    </main>
  )
}
export default App
