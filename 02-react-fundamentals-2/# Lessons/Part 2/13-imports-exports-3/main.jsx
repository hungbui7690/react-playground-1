/*
  Import and Export Statements
  - create src/Books.js (component)
  - import in index.js
  

*/

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { books } from './books'
import Book from './Book' // 2. import

function BookList() {
  return (
    <section className='booklist'>
      {books.map((book) => {
        // 3.
        return <Book {...book} key={book.id} />
      })}
    </section>
  )
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BookList />
  </StrictMode>
)
