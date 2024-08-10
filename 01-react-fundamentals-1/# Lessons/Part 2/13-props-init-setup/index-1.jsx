/*
  Props - Initial Setup
  - refactor/clean up
    -> create + move variables to top

  
*/

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

const author = 'Jordan Moore'
const title = 'Interesting Facts For Curious Minds'
const img = './images/book1.jpg'

const Book = () => {
  return (
    <article className='book'>
      <img src={img} alt={title} />
      <h2>{title}</h2>
      <h4>{author} </h4>
    </article>
  )
}

function BookList() {
  return (
    <section className='booklist'>
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
