import React from 'react'
import SingleColor from './SingleColor'
import { nanoid } from 'nanoid'

// (2a)
const ColorList = ({ colors }) => {
  return (
    <section className='colors'>
      {colors.map((color, idx) => {
        // (2b) use nanoid to generate key + pass index >> go to SingleColor
        return <SingleColor color={color} index={idx} key={nanoid()} />
      })}
    </section>
  )
}

export default ColorList
