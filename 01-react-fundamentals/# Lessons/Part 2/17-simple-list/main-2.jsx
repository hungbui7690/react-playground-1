/*
  Simple List
  - refactor


******************************

  🧵 In React, we cannot render object directly -> solution is to use map()


*/
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

/////////////////////////////////
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

const names = ['john', 'peter', 'susan'] // 1.

// 2.
const newNames = names.map((name) => {
  console.log(`<h1>${name}</h1>`)
  return <h1 key={name}>{name}</h1>
})

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
  // 3. use {newName}
  return <section className='booklist'>{newNames}</section>
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BookList />
  </StrictMode>
)
