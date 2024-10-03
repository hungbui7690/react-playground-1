/*
  Setup
  ~~ npm install framer-motion


\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

  1. components/Home.js

    - <motion.h2 animate={{ fontSize: 60, color: '#f8e112', x: 100, y: -100 }}>
      -> change from h2 to motion.h2
      -> fontSize from initial 24 to 60
      -> color from initial 'white' to '#f8e112'
      -> move component from initial { x: 0, y: 0 } to { x: 100, y: -100 }

    - <motion.button animate={{ scale: 1.5 }}>
      -> not only we can use css animation, we can also use motion animation

    - <motion.div animate={{ marginTop: 200, rotateZ: 180, opacity: 0.5 }}>
      -> add more animations


*/

import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion' // 1.

const Home = () => {
  return (
    <motion.div
      className='home container'
      animate={{ marginTop: 200, rotateZ: 180, opacity: 0.5 }}
    >
      {/* 2. change from h2 to motion.h2 */}
      <motion.h2 animate={{ fontSize: 60, color: '#f8e112', x: 100, y: -100 }}>
        Welcome to Pizza Joint
      </motion.h2>
      <Link to='/base'>
        <motion.button animate={{ scale: 1.5 }}>
          Create Your Pizza
        </motion.button>
      </Link>
    </motion.div>
  )
}

export default Home
