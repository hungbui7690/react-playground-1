/*
  JSX - Javascript
  - {} in JSX means going back to JS Land
  - value inside must be an expression (return value) -> can't be a statement


*/

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

const author = 'Jordan Moore'

const Book = () => {
  const title = 'Interesting Facts For Curious Mindssssss'

  return (
    <article className='book'>
      <img src='./images/book1.jpg' alt='Interesting Facts For Curious Minds' />

      <h2>{title}</h2>
      <h4>{author.toUpperCase()} </h4>

      {/* value inside {} must be expression -> return JSX */}
      {/* <p>{let x = 6}</p> */}
      <p>{6 + 6}</p>
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
