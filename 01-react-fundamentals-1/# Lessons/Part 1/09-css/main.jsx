/*
  CSS
  - create index.css


*/

import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css' // 1. when import js file, we don't need to have extension -> but for another extensions, we need to have extension -> .css

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

// 2. use css -> "className" -> NOT "class"
function BookList() {
  return (
    <section className='booklist'>
      <Book />
      <Book />
      <Book />
    </section>
  )
}

const Book = () => {
  return (
    <article className='book'>
      <Image />
      <Title />
      <Author />
    </article>
  )
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BookList />
  </StrictMode>
)
