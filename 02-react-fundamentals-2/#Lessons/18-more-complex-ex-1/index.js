/*
  More Complex Example
  - initial setup
  - create getBook function in BookList
  - accepts id as an argument and finds the book
  - pass the function down to Book Component and invoke on the button click
  - in the Book Component destructure id and function
  - invoke the function when user clicks the button, pass the id
  - the goal : you should see the same book in the console

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
  // (1)
  const getBook = (id) => {
    const book = books.find((book) => book.id === id)
    console.log(book)
  }

  return (
    <section className='booklist'>
      {books.map((book) => {
        return <Book {...book} key={book.id} getBook={getBook} /> // (2) pass getBook
      })}
    </section>
  )
}

const Book = (props) => {
  const { img, title, author, getBook, id } = props // (3)
  // console.log(props)

  return (
    <article className='book'>
      <img src={img} alt={title} />
      <h2>{title}</h2>
      <h4>{author}</h4>

      {/* (4) this is not going to work >> because we INVOKE the function >> function will be run at the app load */}
      <button onClick={getBook(id)}>display title</button>
    </article>
  )
}

///////////////////////////
const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(<BookList />)
