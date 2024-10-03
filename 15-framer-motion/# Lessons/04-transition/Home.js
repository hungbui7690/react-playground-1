/*
  Transition Options
  - https://www.framer.com/motion/transition/

    -> transition={{ type: "spring", stiffness: 100 }}
    -> transition={{ ease: "linear", duration: 2, x: { duration: 1 } }}


\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

  - stiffness: 500 -> spring a lot 
  - stiffness: 5 -> spring a little


*/

import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

const Home = () => {
  return (
    <motion.div
      className='home container'
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1.5, duration: 1.5 }} // 1. 1.5 second delay, 1.5 second duration -> go to Base.js
    >
      <h2>Welcome to Pizza Joint</h2>
      <Link to='/base'>
        <motion.button animate={{}}>Create Your Pizza</motion.button>
      </Link>
    </motion.div>
  )
}

export default Home
