/*
  Access Props - Multiple Approaches
  - there is no right or wrong - again preference !!!


*************************

  - destructuring in Vanilla JS
  - saves time/typing
  - pull out the properties
  - don't need to reference object anymore


*/

import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

const firstBook = {
  author: 'Jordan Moore',
  title: 'Interesting Facts For Curious Minds',
  img: './images/book1.jpg',
}
const secondBook = {
  author: 'James Clear',
  title: 'Atomic Habits',
  img: 'https://images-na.ssl-images-amazon.com/images/I/81wgcld4wxL._AC_UL900_SR900,600_.jpg',
}

function BookList() {
  return (
    <section className='booklist'>
      <Book
        author={firstBook.author}
        title={firstBook.title}
        img={firstBook.img}
      />
      <Book
        author={secondBook.author}
        title={secondBook.title}
        img={secondBook.img}
      />
    </section>
  )
}

const Book = (props) => {
  const { title, author, img } = props // 1. destructure here

  return (
    <article className='book'>
      {/* 2. no need to use props.title, but just "title" */}
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
