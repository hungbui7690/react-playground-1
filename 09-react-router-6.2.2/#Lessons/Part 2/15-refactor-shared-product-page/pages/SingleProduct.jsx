import { Link, useParams } from 'react-router-dom'
import products from '../data' // 1. load data

const SingleProduct = () => {
  const { productId } = useParams() // get id

  const product = products.find((product) => product.id === productId) // 2. get product from id

  const { image, name } = product // 3. extract name & image

  return (
    <section className='section product'>
      <img src={image} alt={name} />
      <h5>{name}</h5>
      <Link to='/products'>back to products</Link>
    </section>
  )
}

export default SingleProduct
