/*
  Proper List
  - render component
  - pass properties one by one


*/

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

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

function BookList() {
  return (
    <section className='booklist'>
      {books.map((book) => {
        const { img, title, author } = book // 1.
        return <Book img={img} title={title} author={author} /> // 2. return <Book/> + passing props
      })}
    </section>
  )
}

// 3a.
const Book = (props) => {
  const { img, title, author } = props // 3b.

  return (
    <article className='book'>
      <img src={img} alt={title} />
      <h2>{title}</h2>
      <h4>{author} </h4>
    </article>
  )
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BookList />
  </StrictMode>
)
