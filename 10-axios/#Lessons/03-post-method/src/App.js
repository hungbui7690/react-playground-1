/*
  POST method
  - send data to the server
  - axios.post(url, { data })
  - more options (auth header) - axios.post(url, { data },{})

  - test: 
    > check Network Tab 
    > Payload tab
    > Response tab

*/

import Title from './components/Title'
import Setup from './3-post-request'

function App() {
  return (
    <main>
      <Title />
      <Setup />
    </main>
  )
}

export default App
