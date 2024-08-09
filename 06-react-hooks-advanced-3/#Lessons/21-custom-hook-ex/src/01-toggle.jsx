import { useState } from 'react'
import useToggle from './useToggle'

////////////////////////////////////
// WE CREATE CUSTOM HOOK FROM THIS
////////////////////////////////////
// const ToggleExample = () => {
//   const [show, setShow] = useState(false)
//   return (
//     <div>
//       <h4>toggle custom hook</h4>
//       <button className='btn' onClick={() => setShow(!show)}>
//         toggle
//       </button>
//       {show && <h4>some stuff</h4>}
//     </div>
//   )
// }

const ToggleExample = () => {
  const { show, toggle } = useToggle(true) // (2a) instead of using useState(), we change to this

  return (
    <div style={{ textAlign: 'center', margin: '50px' }}>
      <h4>toggle custom hook</h4>

      {/* (2b) change from setShow() to toggle() */}
      <button className='btn' onClick={toggle}>
        toggle
      </button>
      {show && <h4>some stuff</h4>}
    </div>
  )
}

export default ToggleExample
