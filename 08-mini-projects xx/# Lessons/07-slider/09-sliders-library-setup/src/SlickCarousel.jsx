import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css' // (3a) from the docs

import Slider from 'react-slick' // (3b)

import { FaQuoteRight } from 'react-icons/fa'
import { list } from './data' // (3c) just need 1 slide
import Carousel from './Carousel'

const SlickCarousel = () => {
  // (4a) play with these settings to understand more
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  }

  // (4b) go to App.jsx and import
  return (
    <section className='slick-container'>
      <Slider {...settings}>
        <div>
          <h3>1</h3>
        </div>
        <div>
          <h3>2</h3>
        </div>
        <div>
          <h3>3</h3>
        </div>
        <div>
          <h3>4</h3>
        </div>
      </Slider>
    </section>
  )
}

export default SlickCarousel
