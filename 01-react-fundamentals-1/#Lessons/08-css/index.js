/*
  CSS
  - create index.css

*/

import ReactDOM from 'react-dom/client'
import './index.css' // (1) when import js file, we don't need to have extension >> but for another extensions, we need to have extension (.css)

///////////////////////////
// (2) use css >> "className", NOT "class"
///////////////////////////
function BookList() {
  return (
    <section className='booklist'>
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
    </section>
  )
}

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
const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(<BookList />)
