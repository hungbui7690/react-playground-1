/*
  Local Images (Public Folder)
  - pic
  - external images -> hosted on different server -> just need an url
  - local images 
    -> public/images -> less performant
    -> src/ -> better solution for assets -> since under the hood they get optimized.


*****************************

  - Steps
    -> save image in public/
    -> replace url in the src - './images/book1.jpg'
    -> './' because assets are on the same server


*****************************

  - whatever assets we place in public/ -> instantly available
    -> domain:port/images 
    -> localhost:3000/images


*/

import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

// change the source of the local image -> public/images/book.jpg
const Image = () => (
  <img src='./images/book1.jpg' alt='Interesting Facts For Curious Minds' />
)

const Title = () => {
  return <h2>Interesting Facts For Curious Minds</h2>
}
const Author = () => <h4>Jordan Moore </h4>

const Book = () => {
  return (
    <article className='book'>
      <Image />
      <Title />
      <Author />
    </article>
  )
}

function BookList() {
  return (
    <section className='booklist'>
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
