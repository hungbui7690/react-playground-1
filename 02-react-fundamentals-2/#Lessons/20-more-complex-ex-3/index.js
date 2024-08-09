/*
  More Complex Example
  - Method 2 

*/

import ReactDOM from 'react-dom/client'
import './index.css'

///////////////////////////////
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

///////////////////////////////
const BookList = () => {
  const getBook = (id) => {
    const book = books.find((book) => book.id === id)
    console.log(book)
  }

  return (
    <section className='booklist'>
      {books.map((book) => {
        return <Book {...book} key={book.id} getBook={getBook} />
      })}
    </section>
  )
}

const Book = (props) => {
  const { img, title, author, getBook, id } = props

  // (1) put in wrapper function >> so later we can pass ref (since no param)
  const getSingleBook = () => {
    getBook(id)
  }

  return (
    <article className='book'>
      <img src={img} alt={title} />
      <h2>{title}</h2>
      <h4>{author}</h4>

      {/* (2) pass ref >> since no () */}
      <button onClick={getSingleBook}>display title</button>
    </article>
  )
}

///////////////////////////
const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(<BookList />)
