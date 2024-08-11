/*
  JSX - Javascript
  - refactor to single book component (personal preference)
    -> remove Image, Title, Author components
  - remove inline css 
    -> use external css


*/

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

const Book = () => {
  return (
    <article className='book'>
      <img src='./images/book1.jpg' alt='Interesting Facts For Curious Minds' />
      <h2>Interesting Facts For Curious Minds</h2>
      <h4>Jordan Moore </h4>
    </article>
  )
}

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

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BookList />
  </StrictMode>
)
