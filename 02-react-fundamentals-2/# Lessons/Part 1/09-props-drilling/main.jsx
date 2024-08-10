/*
  Prop Drilling
  - we don't create displayValue() in Book -> but this time, we create it in BookList
    -> then we pass it to its child component (Book)


******************************
  - react data flow - CAN ONLY PASS PROPS DOWN
  - alternatives: Context API, Redux, Redux-toolkit, other state libraries...


*/

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

const books = [
  {
    author: 'Jordan Moore',
    title: 'Interesting Facts For Curious Minds',
    img: './images/book1.jpg',
    id: 1,
  },
  {
    author: 'James Clear',
    title: 'Atomic Habits',
    img: 'https://images-na.ssl-images-amazon.com/images/I/81wgcld4wxL._AC_UL900_SR900,600_.jpg',
    id: 2,
  },
]

function BookList() {
  const someValue = 'shakeAndBake' // 1.

  // 2. created in BookList
  const displayValue = () => {
    console.log(someValue)
  }

  return (
    <section className='booklist'>
      {books.map((book) => {
        return <Book {...book} key={book.id} displayValue={displayValue} /> // 3. similar to property, we also can pass function down to its child component
      })}
    </section>
  )
}

const Book = (props) => {
  const { img, title, author, displayValue } = props // 4. take the function out

  return (
    <article className='book'>
      <img src={img} alt={title} />
      <h2>{title}</h2>
      <h4>{author} </h4>

      {/* 5. use it */}
      <button onClick={displayValue}>click me</button>
    </article>
  )
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BookList />
  </StrictMode>
)
