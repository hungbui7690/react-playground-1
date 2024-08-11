/*
  useNavigate
  - redirect to page


**************************

  - Optional Chaining -> ?. 
  

**************************

  1. App.jsx
  2. Login.jsx


*/

import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { useState } from 'react'
import Home from './pages/Home'
import About from './pages/About'
import Products from './pages/Products'
import Error from './pages/Error'
import SharedLayout from './SharedLayout'
import SingleProduct from './pages/SingleProduct'
import Login from './pages/Login'
import Dashboard from './pages/Dashboard'

function App() {
  const [user, setUser] = useState(null) // 1.

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path='about' element={<About />} />
          <Route path='products' element={<Products />} />
          <Route path='products/:productId' element={<SingleProduct />} />

          {/* 2. pass setUser */}
          <Route path='login' element={<Login setUser={setUser} />} />

          {/* 3. pass user -> pages/Login */}
          <Route path='dashboard' element={<Dashboard user={user} />} />

          <Route path='*' element={<Error />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
