/*
  Simple List
  - refactor


******************************

  🧵 In React, we cannot render object directly -> solution is to use map()


*/

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

// 1. data
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

function BookList() {
  // 2. can't render object directly in React -> err
  return <section className='booklist'>{books}</section>
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BookList />
  </StrictMode>
)
