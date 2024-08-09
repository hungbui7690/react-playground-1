/*
  React Router 6.2.2 - First Pages
  - npm install react-router-dom@6.2.2

  - wrap everything in 
    <BrowserRouter> 
      <Routes>

  - each path or URL will be a single <Route>

  - test
    + / 
    + /testing


  > https://reactrouter.com/en/main/utils/create-routes-from-elements

*/

import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<div>homepage</div>} />
        <Route
          path='testing'
          element={
            <div>
              <h2>testing </h2>
            </div>
          }
        />
      </Routes>
    </BrowserRouter>
  )
}

export default App
