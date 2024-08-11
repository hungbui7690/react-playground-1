/*
  Title Challenge
  - add a title to our app (css optional)
  - change page title (in html file)


*/

import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { books } from './books'
import Book from './Book'

function BookList() {
  return (
    <React.Fragment>
      {/* 1. add title */}
      <h1>Amazon Best Sellers</h1>
      <section className='booklist'>
        {books.map((book, idx) => {
          return <Book {...book} key={book.id} number={idx} />
        })}
      </section>
    </React.Fragment>
  )
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BookList />
  </StrictMode>
)
