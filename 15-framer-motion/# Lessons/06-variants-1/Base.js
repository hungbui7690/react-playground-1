/*
  Variants
  - allow us to extract animate, initial... objects into a single object, and then use in motion.el
  - allot us to propagate animations down the tree
  - can create timing relationship between parent and children motions using orchestration properties


*/

import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

// 1.
const containerVariants = {
  hidden: {
    opacity: 0,
    x: '100vw',
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: { type: 'spring', delay: 0.5 }, // can also add transition here
  },
}

// 3.
const nextVariants = {
  hidden: {
    x: '-100vw',
  },
  visible: {
    x: 0,
    transition: { type: 'spring', stiffness: 80 },
  },
}

const Base = ({ addBase, pizza }) => {
  const bases = ['Classic', 'Thin & Crispy', 'Thick Crust']

  return (
    <motion.div
      className='base container'
      variants={containerVariants} // 2a. setup variants
      initial={'hidden'} // 2b. use hidden from containerVariants
      animate={'visible'} // 2c. use visible from containerVariants
    >
      <h3>Step 1: Choose Your Base</h3>
      <ul>
        {bases.map((base) => {
          let spanClass = pizza.base === base ? 'active' : ''
          return (
            <li key={base} onClick={() => addBase(base)}>
              <span className={spanClass}>{base}</span>
            </li>
          )
        })}
      </ul>

      {pizza.base && (
        <motion.div
          className='next'
          variants={nextVariants} // # 4b. though we use <nextVariants> here, it does not use the "visible" and "hidden" props from it -> but it will use the "initial" and "animate" props from its parent, which is <containerVariants>
        >
          <Link to='/toppings'>
            <motion.button
              whileHover={{
                scale: 1.1,
                textShadow: '0px 0px 8px rgb(255,255,255)',
                boxShadow: '0px 0px 8px rgb(255,255,255)',
              }}
            >
              Next
            </motion.button>
          </Link>
        </motion.div>
      )}
    </motion.div>
  )
}

export default Base
