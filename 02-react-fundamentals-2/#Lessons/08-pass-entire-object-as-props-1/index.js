/*
  Pass The Entire Object
  - spread operator

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
        return <Book {...book} key={id} /> // (1) use spread operator
      })}
    </section>
  )
}

/////////////////////////////////
const Book = (props) => {
  const { img, title, author } = props // (2)

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
