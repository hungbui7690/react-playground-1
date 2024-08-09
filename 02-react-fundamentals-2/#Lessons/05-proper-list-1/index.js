/*
  Proper List

*/

import ReactDOM from 'react-dom/client'
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

/////////////////////////////////
function BookList() {
  return (
    <section className='booklist'>
      {books.map((book) => {
        console.log(book)

        // return 'hello'
        return (
          <div>
            <h2>{book.title}</h2>
          </div>
        )
      })}
    </section>
  )
}

/////////////////////////////////
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

///////////////////////////
const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(<BookList />)
