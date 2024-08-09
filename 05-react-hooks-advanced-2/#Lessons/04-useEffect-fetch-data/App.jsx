/*
  UseEffect - Fetch Data
  - later in the course we will use axios

  - Setup Challenge :
    > import useState and useEffect
    > setup state value
      - users - default value []
    > setup useEffect
    > MAKE SURE IT RUNS ONLY ON INITIAL RENDER
    > in the cb, create a function which performs fetch functionality
      - use url I provided in the starter file
      - you can use .then or async
      - set users equal to result
      - iterate over the list and display image, user name and link
    *** DON'T WORRY ABOUT CSS, MOST IMPORTANT LOGIC !!!

*/

import Starter from './04-fetch-data'
import './index.css'

function App() {
  return (
    <div className='container'>
      <Starter />
    </div>
  )
}

export default App
