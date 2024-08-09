/*
  Book List App
  - in search engine type - 'amazon best selling books'
  - choose a book
  - copy image, title and author


*/

import ReactDOM from 'react-dom/client'

///////////////////////////
// (3)
///////////////////////////
function BookList() {
  return (
    <section>
      <Book />
      <Book />
    </section>
  )
}

///////////////////////////
// (2)
///////////////////////////
const Book = () => {
  return (
    <article className='book'>
      <Image />
      <Title />
      <Author />
    </article>
  )
}

///////////////////////////
// (1) everything is hard code
///////////////////////////
const Image = () => (
  <img
    src='https://images-na.ssl-images-amazon.com/images/I/71m+Qtq+HrL._AC_UL900_SR900,600_.jpg'
    alt='Interesting Facts For Curious Minds'
  />
)

const Title = () => {
  return <h2>Interesting Facts For Curious Minds</h2>
}
const Author = () => <h4>Jordan Moore </h4>

///////////////////////////
// ***
///////////////////////////
const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(<BookList />) // (4)
