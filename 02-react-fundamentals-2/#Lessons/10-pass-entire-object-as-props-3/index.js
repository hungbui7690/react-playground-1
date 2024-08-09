/*
  Pass The Entire Object
  - render component
  - pass entire object
  - destructuring (object)

  *** { book: { title, author, img }
  NOT { book: title, author, img} >> err

*/

import ReactDOM from 'react-dom/client'
import './index.css'

/////////////////////////////////
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

/////////////////////////////////
function BookList() {
  return (
    <section className='booklist'>
      {books.map((book) => {
        const { id } = book
        return <Book book={book} key={id} /> // (1) pass the entire object
      })}
    </section>
  )
}

/////////////////////////////////
// *** we can also destruct directly here
const Book = ({ book: { title, author, img } }) => {
  return (
    <article className='book'>
      <img src={img} alt={title} />
      <h2>{title}</h2>
      <h4>{author} </h4>
    </article>
  )
}

///////////////////////////
const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(<BookList />)
