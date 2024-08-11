import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import Slider from 'react-slick'
import { FaQuoteRight } from 'react-icons/fa'
import { list } from './data'
import Carousel from './Carousel'

const SlickCarousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,

    // (4) try to play with some settings (check docs >> examples)
    // fade: true,
    autoplay: true,
    autoplaySpeed: 1000,
    pauseOnHover: true,
  }

  // (1) remove the div, and use our data >> go to css
  return (
    <section className='slick-container'>
      <Slider {...settings}>
        {list.map((person, index) => {
          const { id, image, name, title, quote } = person

          return (
            <article key={person.id}>
              <img src={image} alt={name} className='person-img' />
              <h5 className='name'>{name}</h5>
              <p className='title'>{title}</p>
              <p className='text'>{quote}</p>
              <FaQuoteRight className='icon' />
            </article>
          )
        })}
      </Slider>
    </section>
  )
}

export default SlickCarousel
