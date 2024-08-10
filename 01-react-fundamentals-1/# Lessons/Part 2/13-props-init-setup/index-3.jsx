/*
  Props - Initial Setup


*/

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

const author = 'Jordan Moore'
const title = 'Interesting Facts For Curious Minds'
const img = './images/book1.jpg'

function BookList() {
  return (
    <section className='booklist'>
      {/* pass the real properties we want (author, title, img) */}
      <Book author={author} title={title} img={img} />

      {/* no img prop for this book */}
      <Book author={author} title={title} />
    </section>
  )
}

const Book = (props) => {
  return (
    <article className='book'>
      <img src={props.img} alt={props.title} />
      <h2>{props.title}</h2>
      <h4>{props.author} </h4>
    </article>
  )
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BookList />
  </StrictMode>
)
