import React from 'react'
import Title from './Title'
import { services } from '../data'
import Service from './Service' // (2a)

const Services = () => {
  return (
    <section className='section services' id='services'>
      <Title title='our' subTitle='services' />

      <div className='section-center services-center'>
        {/* (2b) go to Tour.js */}
        {services.map((service) => {
          return <Service {...service} key={service.id} />
        })}
      </div>
    </section>
  )
}

export default Services
