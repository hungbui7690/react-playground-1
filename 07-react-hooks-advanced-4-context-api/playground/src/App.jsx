/*
  React Suspense
  - The Suspense API is a feature in React that allows you to manage the loading state of your components. It provides a way to "suspend" rendering of a component until some data has been fetched, and display a fallback UI in the meantime. This makes it easier to handle asynchronous data loading and provide a smooth user experience in your React application.


****************************

  - by splitting our code into smaller, more manageable chunks -> reduce the size of the initial JS payload that needs to be loaded
    -> faster load time + improve performance -> especially in slow network, or low-end devices

  
****************************

  - home page and contact page, which will has more traffics -> we don't need to jam everything into the browser 
  - prioritize the important resources over the less important ones 
  - in order to lazy load or progressive load our app -> use Suspense API
  - Suspense API is released for some time -> but just the code splitting feature is fully supported
    -> other ones are still experimental, including data fetching


****************************

  1. check 04-react-18/SlowComponent

  2. index.jsx -> place SlowComponent at the end of the UI
    -> still keeps 4x slowdown to test -> take a while to load our app
    -> Network tab -> Slow Component

  3. add show, setShow state
  4. add show button right above it
    -> there's no guarantee that the button will be clicked by user -> but the SlowComponent still be imported 
    -> we want just when user click that button, the SlowComponent will be imported


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
