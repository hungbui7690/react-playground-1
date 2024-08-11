/*
  useSelector
  - use to access store values 


***************************

  - how to use useSelector

    const { amount } = useSelector((store) => store.cart)


***************************

  - install Redux Devtools
    -> pic
    -> with this, when we dispatch actions -> we can clearly see how the states change


***************************

  Hero Icons: 
  - https://heroicons.com/
  - we use Hero Icons in this project
      nav svg {
        width: 40px;
        color: var(--clr-white);
      }


***************************

  1. create components/Navbar.js


*/

import Navbar from './components/Navbar'

function App() {
  return (
    <main>
      <Navbar />
    </main>
  )
}
export default App
