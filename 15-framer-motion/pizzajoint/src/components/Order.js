import React from 'react'
import { motion } from 'framer-motion'

// 3.
const containerVariants = {
  hidden: {
    opacity: 0,
    x: '100vw',
    transition: {
      staggerChildren: 0.5,
    },
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      type: 'spring',
      mass: 0.4,
      damping: 8,
      staggerChildren: 0.4,
      when: 'beforeChildren',
    },
  },
}

// 5.
const childVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
  },
}

const Order = ({ pizza }) => {
  return (
    <motion.div
      className='container order'
      variants={containerVariants} // 4. we want to use "different" animations for the h2 and the list below as well
      initial='hidden'
      animate='visible'
      exit='exit'
    >
      <h2>Thank you for your order :)</h2>

      {/* 7.  */}
      <motion.p variants={childVariants}>
        You ordered a {pizza.base} pizza with:
      </motion.p>

      {/* 6. because we use the same "visible" and "hidden" -> it will be inherits from the parent */}
      <motion.div variants={childVariants}>
        {pizza.toppings.map((topping) => (
          <div key={topping}>{topping}</div>
        ))}
      </motion.div>
    </motion.div>
  )
}

export default Order
