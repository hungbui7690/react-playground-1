import { Link, useParams } from 'react-router-dom' // 2. useParams

const SingleProduct = () => {
  const { productId } = useParams() // 3.

  return (
    <section className='section product'>
      <h2>{productId}</h2>
      <Link to='/products'>back to products</Link>
    </section>
  )
}

export default SingleProduct
