/*
  Key Prop
  - when we render list in react -> react wants to keep track of those items -> <key> props
  - <key> prop does not need to be number -> can be string -> as long as it is unique
  - normally, data will be fetch from API -> so it has id -> can use as key props


*****************************

  - at 2. -> we are using "index" -> but "index" just can be used for the list that never change -> if we have the button to add / remove item in the list, then "index" won't work 
    -> we should use unique values in our data as the <key> prop 


*/

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

const books = [
  {
    author: 'Jordan Moore',
    title: 'Interesting Facts For Curious Minds',
    img: './images/book1.jpg',
    id: 1, // 1. add id
  },
  {
    author: 'James Clear',
    title: 'Atomic Habits',
    img: 'https://images-na.ssl-images-amazon.com/images/I/81wgcld4wxL._AC_UL900_SR900,600_.jpg',
    id: 2,
  },
]

function BookList() {
  return (
    <section className='booklist'>
      {books.map((book, index) => {
        console.log(book)
        const { title, author, img, id } = book
        return <Book img={img} title={title} author={author} key={index} /> // 2. add key props -> it can be "id" or "index" -> but typically, we use "id" instead
      })}
    </section>
  )
}

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

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BookList />
  </StrictMode>
)
