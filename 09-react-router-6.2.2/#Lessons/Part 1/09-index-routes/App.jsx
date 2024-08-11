/*
  Index Routes
  - Index routes render in the parent routes outlet at the parent route's path.
  - Index routes match when a parent route matches but none of the other children match.
  - Index routes are the default child route for a parent route.
  - Index routes render when the user hasn't clicked one of the items in a navigation list yet.


  1. create SharedLayout.js
    -> instead of place the Outlet in Home component
    -> we create SharedLayout.jsx -> copy from Home.jsx to SharedLayout.jsx


*/

import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Products from './pages/Products'
import Error from './pages/Error'
import SharedLayout from './SharedLayout'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* 2. change the parent path element to SharedLayout */}
        {/* 3. add <index> to <Home/> -> now / is Home page */}
        <Route path='/' element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path='about' element={<About />} />
          <Route path='products' element={<Products />} />
          <Route path='*' element={<Error />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
