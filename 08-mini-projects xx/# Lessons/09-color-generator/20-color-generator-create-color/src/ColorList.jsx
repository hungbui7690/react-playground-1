import React from 'react'
import SingleColor from './SingleColor'
import { nanoid } from 'nanoid'

const ColorList = ({ colors }) => {
  return (
    <section className='colors'>
      {colors.map((color, idx) => {
        return <SingleColor color={color} index={idx} key={nanoid()} />
      })}
    </section>
  )
}

export default ColorList
