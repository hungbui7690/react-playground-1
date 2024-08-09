/*
  Simple List
  - refactor

  *** in React, we cannot render object directly >> solution is to use map()

*/

import ReactDOM from 'react-dom/client'
import './index.css'

/////////////////////////////////
// (1)
const books = [
  {
    author: 'Jordan Moore',
    title: 'Interesting Facts For Curious Minds',
    img: './images/book-1.jpg',
  },
  {
    author: 'James Clear',
    title: 'Atomic Habits',
    img: 'https://images-na.ssl-images-amazon.com/images/I/81wgcld4wxL._AC_UL900_SR900,600_.jpg',
  },
]

/////////////////////////////////
function BookList() {
  // (2) can't render objects in React >> {books} >> err
  return <section className='booklist'>{books}</section>
}

const Book = (props) => {
  const { img, title, author } = props

  return (
    <article className='book'>
      <img src={img} alt={title} />
      <h2>{title}</h2>
      <h4>{author} </h4>
    </article>
  )
}

///////////////////////////
const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(<BookList />)
