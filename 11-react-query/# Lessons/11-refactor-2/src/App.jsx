/*
  Refactor
  (1) reactQueryCustomHooks.js

  *** for the useCreateTasks(), we cannot access to setNewItemName)
    > one way to fix is useCreateTasks(setNewItemName)

////////////////////////////////

  Alternative Server Setup
  - server >> npm start
  - client adds item >> ok 
  - stop server >> then restart 
    > everything will go back to default (taskList in server.js)

  - to fix this, we start server by using: 
    > npm run local-server

*/

import { ToastContainer } from 'react-toastify'
import Form from './Form'
import Items from './Items'

const App = () => {
  return (
    <section className='section-center'>
      <ToastContainer position='top-center' />
      <Form />
      <Items />
    </section>
  )
}

export default App
